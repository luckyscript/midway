import { Config, Init, Provide } from '@midwayjs/core';
import { Fido2Lib } from 'fido2-lib';

/**
 * WebAuthN Service for Passkey authentication
 * Provides methods for registration and assertion challenges
 */
@Provide('webAuthnService')
export class WebAuthNService {
  f2l: Fido2Lib;

  @Config('passkey')
  passkeyConfig;

  @Init()
  init() {
    this.f2l = new Fido2Lib({
      timeout: this.passkeyConfig.timeout,
      rpId: this.passkeyConfig.rp.id,
      rpName: this.passkeyConfig.rp.name,
      challengeSize: 128,
      attestation: this.passkeyConfig.attestation,
      cryptoParams: this.passkeyConfig.cryptoParams,
      authenticatorRequireResidentKey: this.passkeyConfig.authenticatorRequireResidentKey,
      authenticatorUserVerification: this.passkeyConfig.authenticatorUserVerification,
    });
  }

  /**
   * Generate registration options for creating a new passkey
   * @param user - User information for registration
   * @param user.id - User ID as number or string
   * @param user.username - User name
   * @param user.displayName - User display name
   * @returns Registration options with challenge
   */
  async registration(user: {
    id: number | string;
    username: string;
    displayName: string;
  }) {
    const userId =
      typeof user.id === 'number'
        ? new Uint8Array([user.id])
        : new TextEncoder().encode(user.id);

    const registrationOption = await this.f2l.attestationOptions();

    registrationOption.user = {
      id: userId,
      name: user.username,
      displayName: user.displayName,
    };

    const challengeBase64 = this.base64URLencode(registrationOption.challenge);
    const userIdBase64 = this.base64URLencode(userId);
    return {
      ...registrationOption,
      challengeBase64,
      userIdBase64,
    };
  }

  /**
   * Verify attestation response from browser
   * @param clientAttestationResponse - Response from navigator.credentials.create()
   * @param challenge - Expected challenge stored in session
   * @returns Attestation result with credential data
   */
  async attestation(
    clientAttestationResponse: any,
    challenge: string
  ) {
    const attestationExpectations: any = {
      challenge: this.base64URLdecode(challenge),
      origin: this.passkeyConfig.origin,
      factor: 'either',
    };

    return await this.f2l.attestationResult(
      clientAttestationResponse,
      attestationExpectations
    );
  }

  /**
   * Generate assertion options for passkey authentication
   * @param allowCredentials - Optional list of allowed credentials
   * @returns Assertion options with challenge
   */
  async login(allowCredentials?: any[]) {
    const assertionOptions: any = await this.f2l.assertionOptions();

    if (allowCredentials) {
      assertionOptions.allowCredentials = allowCredentials;
    }

    assertionOptions.challengeBase64 = this.base64URLencode(
      assertionOptions.challenge
    );
    assertionOptions.status = 'ok';
    return assertionOptions;
  }

  /**
   * Verify assertion response from browser
   * @param assertionResult - Response from navigator.credentials.get()
   * @param expectedAssertionResult - Expected assertion parameters
   * @returns Assertion result or false if verification fails
   */
  async assertion(assertionResult: any, expectedAssertionResult: any) {
    try {
      return await this.f2l.assertionResult(
        assertionResult,
        expectedAssertionResult
      );
    } catch {
      return false;
    }
  }

  /**
   * Encode ArrayBuffer to base64URL string
   * @param buffer - ArrayBuffer to encode
   * @returns base64URL encoded string
   */
  base64URLencode(buffer: ArrayBuffer): string {
    return btoa(
      Array.from(new Uint8Array(buffer), b => String.fromCharCode(b)).join('')
    )
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  /**
   * Decode base64URL string to ArrayBuffer
   * @param base64URL - base64URL string to decode
   * @returns Decoded ArrayBuffer
   */
  base64URLdecode(base64URL: string): ArrayBuffer {
    const m = base64URL.length % 4;
    return Uint8Array.from(
      atob(
        base64URL
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .padEnd(base64URL.length + (m === 0 ? 0 : 4 - m), '=')
      ),
      c => c.charCodeAt(0)
    ).buffer;
  }
}
