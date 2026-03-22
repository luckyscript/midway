import { Provide, Inject, Config } from '@midwayjs/core';
import { Context } from '@midwayjs/web';
import { WebAuthNService } from './webauthn';
import { AuthenticatorTransport } from '../interface';

/**
 * Authenticator token interface
 */
export interface AuthenticatorToken {
  credId: string;
  publicKey: string;
  type: string;
  transports: string;
  counter: number;
  userId?: number | string;
}

/**
 * Passkey service for WebAuthn authentication
 * Provides methods for passkey registration and validation
 */
@Provide()
export class PasskeyService {
  @Inject()
  ctx: Context;

  @Inject()
  webAuthnService: WebAuthNService;

  @Config('passkey')
  passkeyConfig;

  /**
   * Get passkey registration info for creating a new passkey
   * This method generates registration options for the browser WebAuthn API
   *
   * @param user - User information
   * @param user.id - User ID
   * @param user.username - Username
   * @param user.displayName - Display name
   * @param excludeCredentials - Existing credentials to exclude
   * @returns Registration options for navigator.credentials.create()
   */
  async getRegistrationOptions(user: {
    id: number | string;
    username: string;
    displayName: string;
  }, excludeCredentials?: AuthenticatorToken[]) {
    const challengeCred = await this.webAuthnService.registration(user);

    // Store challenge in session for verification
    this.ctx.session.challenge = challengeCred.challengeBase64;

    // Format excludeCredentials for WebAuthn
    const formattedExcludeCredentials = excludeCredentials?.map(cred => ({
      id: cred.credId,
      type: 'public-key' as const,
      transports: cred.transports?.split(',') as AuthenticatorTransport[],
    }));

    return {
      ...challengeCred,
      excludeCredentials: formattedExcludeCredentials,
    };
  }

  /**
   * Verify and register a new passkey
   * Call this after user completes navigator.credentials.create()
   *
   * @param passkey - Passkey response from browser
   * @param passkey.rawId - Raw credential ID (base64URL)
   * @param passkey.response - Credential response
   * @param passkey.type - Credential type
   * @param passkey.transports - Credential transports
   * @returns Verified authenticator token
   */
  async verifyRegistration(passkey: {
    rawId: string;
    response: {
      attestationObject: string;
      clientDataJSON: string;
      transports?: string[];
    };
    type: string;
    transports?: string[];
  }) {
    // Decode base64URL values
    const decodedPasskey = {
      ...passkey,
      rawId: this.webAuthnService.base64URLdecode(passkey.rawId),
      response: {
        ...passkey.response,
        attestationObject: this.webAuthnService.base64URLdecode(
          passkey.response.attestationObject
        ),
        clientDataJSON: this.webAuthnService.base64URLdecode(
          passkey.response.clientDataJSON
        ),
      },
    };

    // Verify attestation
    const attestationResult = await this.webAuthnService.attestation(
      decodedPasskey,
      this.ctx.session.challenge
    );

    // Create authenticator token
    const token: AuthenticatorToken = {
      credId: this.webAuthnService.base64URLencode(
        attestationResult.authnrData.get('credId')
      ),
      publicKey: attestationResult.authnrData.get('credentialPublicKeyPem'),
      type: passkey.type,
      transports: (passkey.transports || []).join(','),
      counter: attestationResult.authnrData.get('counter'),
    };

    return token;
  }

  /**
   * Get passkey authentication options for login
   *
   * @param allowCredentials - Optional list of allowed credentials
   * @returns Assertion options for navigator.credentials.get()
   */
  async getAssertionOptions(allowCredentials?: AuthenticatorToken[]) {
    const formattedCredentials = allowCredentials?.map(cred => ({
      id: cred.credId,
      type: 'public-key' as const,
      transports: cred.transports?.split(',') as AuthenticatorTransport[],
    }));

    const assertion = await this.webAuthnService.login(formattedCredentials);

    // Store challenge in session for verification
    this.ctx.session.challenge = assertion.challengeBase64;
    this.ctx.session.allowCredentials = allowCredentials;

    return assertion;
  }

  /**
   * Verify passkey assertion for authentication
   * Call this after user completes navigator.credentials.get()
   *
   * @param passkey - Passkey assertion response from browser
   * @param passkey.rawId - Raw credential ID (base64URL)
   * @param passkey.response - Assertion response
   * @param authenticators - Stored authenticators to verify against
   * @returns Verified authenticator token or null if verification fails
   */
  async verifyAssertion(
    passkey: {
      rawId: string;
      response: {
        authenticatorData: string;
        clientDataJSON: string;
        signature: string;
        userHandle?: string;
      };
    },
    authenticators: AuthenticatorToken[]
  ) {
    // Decode base64URL values
    const decodedPasskey = {
      ...passkey,
      rawId: this.webAuthnService.base64URLdecode(passkey.rawId),
      response: {
        authenticatorData: this.webAuthnService.base64URLdecode(
          passkey.response.authenticatorData
        ),
        clientDataJSON: this.webAuthnService.base64URLdecode(
          passkey.response.clientDataJSON
        ),
        signature: this.webAuthnService.base64URLdecode(
          passkey.response.signature
        ),
        userHandle: passkey.response.userHandle
          ? this.webAuthnService.base64URLdecode(passkey.response.userHandle)
          : undefined,
      },
    };

    // Try to verify against each authenticator
    const validAuthenticator = await this.findValidAuthenticator(
      decodedPasskey,
      authenticators
    );

    return validAuthenticator || null;
  }

  /**
   * Find valid authenticator from the list
   */
  private async findValidAuthenticator(
    passkey: any,
    authenticators: AuthenticatorToken[]
  ): Promise<AuthenticatorToken | undefined> {
    for (const item of authenticators) {
      const assertionExpectations = {
        allowCredentials: this.ctx.session.allowCredentials,
        challenge: this.ctx.session.challenge,
        factor: 'either' as const,
        origin: this.passkeyConfig.origin,
        publicKey: item.publicKey,
        prevCounter: item.counter,
        userHandle: this.webAuthnService.base64URLdecode(item.credId),
      };

      const result = await this.webAuthnService.assertion(
        passkey,
        assertionExpectations
      );

      if (result) {
        // Update counter if needed
        item.counter = result.authnrData.get('counter');
        return item;
      }
    }
  }
}
