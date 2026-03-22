// Mock fido2-lib before any imports
jest.mock('fido2-lib', () => {
  const mockCounter = 0;

  class MockFido2Lib {
    options: any;

    constructor(options: any) {
      this.options = options;
    }

    async attestationOptions() {
      const challenge = Buffer.from('mock-challenge-' + Date.now());
      return {
        challenge,
        timeout: 90000,
        attestation: 'none',
        cryptoParams: [-7, -257],
        authenticatorSelection: {
          requireResidentKey: false,
          userVerification: 'preferred',
        },
      };
    }

    async attestationResult(response: any, expectations: any) {
      const authnrData = new Map();
      authnrData.set('credId', Buffer.from('mock-cred-id'));
      authnrData.set('credentialPublicKeyPem', 'mock-public-key-pem');
      authnrData.set('counter', mockCounter + 1);

      return {
        authnrData,
        audit: {
          validExpectations: true,
          validResult: true,
          journal: new Set(),
        },
      };
    }

    async assertionOptions() {
      const challenge = Buffer.from('mock-assertion-challenge-' + Date.now());
      return {
        challenge,
        timeout: 90000,
        userVerification: 'preferred',
      };
    }

    async assertionResult(response: any, expectations: any) {
      // Throw error for invalid responses to test error handling
      if (expectations.publicKey === 'invalid-public-key' || expectations.publicKey === 'test') {
        throw new Error('Invalid signature');
      }

      const authnrData = new Map();
      authnrData.set('counter', mockCounter + 1);

      return {
        authnrData,
        audit: {
          validExpectations: true,
          validResult: true,
          journal: new Set(),
        },
      };
    }
  }

  return { Fido2Lib: MockFido2Lib };
});

import { createLightApp, close } from '@midwayjs/mock';
import * as assert from 'assert';
import * as passkey from '../src';
import { PasskeyService, WebAuthNService, AuthenticatorToken } from '../src';

describe('test/index.test.ts', function () {
  describe('WebAuthNService', function () {
    let app;
    let webAuthnService: WebAuthNService;

    beforeEach(async () => {
      app = await createLightApp('', {
        imports: [passkey],
        globalConfig: {
          passkey: {
            rp: {
              name: 'Test App',
              id: 'localhost',
            },
            origin: 'http://localhost:7001',
            timeout: 90000,
            attestation: 'none',
            cryptoParams: [-7, -257],
            authenticatorRequireResidentKey: false,
            authenticatorUserVerification: 'preferred',
          },
        },
      });
      webAuthnService = await app.getApplicationContext().getAsync(WebAuthNService);
    });

    afterEach(async () => {
      await close(app);
    });

    it('should test base64URL encode and decode', async () => {
      const testString = 'hello world';
      const encoder = new TextEncoder();
      const buffer = encoder.encode(testString);

      const encoded = webAuthnService.base64URLencode(buffer);
      const decoded = webAuthnService.base64URLdecode(encoded);

      const decodedString = new TextDecoder().decode(decoded);
      assert.strictEqual(decodedString, testString);
    });

    it('should test base64URL encode and decode with ArrayBuffer', async () => {
      const testArray = new Uint8Array([1, 2, 3, 4, 5]);
      const buffer = testArray.buffer;

      const encoded = webAuthnService.base64URLencode(buffer);
      const decoded = webAuthnService.base64URLdecode(encoded);

      assert.deepStrictEqual(new Uint8Array(decoded), testArray);
    });

    it('should test registration', async () => {
      const user = {
        id: 123,
        username: 'testuser',
        displayName: 'Test User',
      };

      const result = await webAuthnService.registration(user);

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.ok(result.userIdBase64);
      assert.strictEqual(result.user.name, user.username);
      assert.strictEqual(result.user.displayName, user.displayName);
    });

    it('should test registration with string id', async () => {
      const user = {
        id: 'user-abc-123',
        username: 'testuser',
        displayName: 'Test User',
      };

      const result = await webAuthnService.registration(user);

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.ok(result.userIdBase64);
      assert.strictEqual(result.user.name, user.username);
    });

    it('should test login', async () => {
      const result = await webAuthnService.login();

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.strictEqual(result.status, 'ok');
    });

    it('should test login with allowCredentials', async () => {
      const allowCredentials = [
        {
          id: 'cred123',
          type: 'public-key' as const,
        },
      ];

      const result = await webAuthnService.login(allowCredentials);

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.deepStrictEqual(result.allowCredentials, allowCredentials);
    });

    it('should test assertion with invalid response returns false', async () => {
      const assertionResult = {
        rawId: 'test',
        response: {
          authenticatorData: 'test',
          clientDataJSON: 'test',
          signature: 'test',
        },
      };

      const expectedAssertionResult = {
        challenge: 'test',
        origin: 'http://localhost:7001',
        factor: 'either' as const,
        publicKey: 'test',
        prevCounter: 0,
        userHandle: 'test',
      };

      const result = await webAuthnService.assertion(
        assertionResult,
        expectedAssertionResult
      );

      // Mock now throws error for invalid public key, which returns false
      assert.strictEqual(result, false);
    });
  });

  describe('PasskeyService', function () {
    let app;
    let passkeyService: PasskeyService;

    beforeEach(async () => {
      app = await createLightApp('', {
        imports: [passkey],
        globalConfig: {
          passkey: {
            rp: {
              name: 'Test App',
              id: 'localhost',
            },
            origin: 'http://localhost:7001',
            timeout: 90000,
            attestation: 'none',
            cryptoParams: [-7, -257],
            authenticatorRequireResidentKey: false,
            authenticatorUserVerification: 'preferred',
          },
        },
      });
      passkeyService = await app.getApplicationContext().getAsync(PasskeyService);

      // Mock session on context - access context via passkeyService.ctx
      (passkeyService.ctx.session as any) = {
        challenge: 'mock-challenge',
        allowCredentials: [],
      };
    });

    afterEach(async () => {
      await close(app);
    });

    it('should test getRegistrationOptions', async () => {
      const user = {
        id: 123,
        username: 'testuser',
        displayName: 'Test User',
      };

      const result = await passkeyService.getRegistrationOptions(user);

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.ok(result.userIdBase64);
      assert.strictEqual(result.user.name, user.username);
      assert.strictEqual(result.user.displayName, user.displayName);
      assert.ok(passkeyService.ctx.session.challenge);
    });

    it('should test getRegistrationOptions with excludeCredentials', async () => {
      const user = {
        id: 123,
        username: 'testuser',
        displayName: 'Test User',
      };

      const excludeCredentials: AuthenticatorToken[] = [
        {
          credId: 'excluded-cred-1',
          publicKey: 'public-key-1',
          type: 'public-key',
          transports: 'usb,ble',
          counter: 0,
        },
      ];

      const result = await passkeyService.getRegistrationOptions(user, excludeCredentials);

      assert.ok(result.excludeCredentials);
      assert.strictEqual(result.excludeCredentials.length, 1);
      assert.strictEqual(result.excludeCredentials[0].id, 'excluded-cred-1');
      assert.strictEqual(result.excludeCredentials[0].type, 'public-key');
    });

    it('should test getAssertionOptions', async () => {
      const result = await passkeyService.getAssertionOptions();

      assert.ok(result.challenge);
      assert.ok(result.challengeBase64);
      assert.strictEqual(result.status, 'ok');
      assert.ok(passkeyService.ctx.session.challenge);
    });

    it('should test getAssertionOptions with allowCredentials', async () => {
      const allowCredentials: AuthenticatorToken[] = [
        {
          credId: 'cred123',
          publicKey: 'public-key-pem',
          type: 'public-key',
          transports: 'usb,ble',
          counter: 0,
        },
      ];

      const result = await passkeyService.getAssertionOptions(allowCredentials);

      assert.ok(result.challenge);
      assert.ok(passkeyService.ctx.session.allowCredentials);
    });

    it('should test verifyAssertion with empty authenticators returns null', async () => {
      // Use valid base64url encoded values
      const passkey = {
        rawId: btoa('test-raw-id').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
        response: {
          authenticatorData: btoa('test-data').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
          clientDataJSON: btoa('test-json').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
          signature: btoa('test-signature').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
        },
      };

      const authenticators: AuthenticatorToken[] = [];

      const result = await passkeyService.verifyAssertion(passkey as any, authenticators);

      assert.strictEqual(result, null);
    });

    it('should test verifyAssertion with invalid authenticator returns null', async () => {
      // Use valid base64url encoded values
      const passkey = {
        rawId: btoa('test-raw-id').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
        response: {
          authenticatorData: btoa('test-data').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
          clientDataJSON: btoa('test-json').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
          signature: btoa('test-signature').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
        },
      };

      const authenticators: AuthenticatorToken[] = [
        {
          credId: 'cred123',
          publicKey: 'invalid-public-key',
          type: 'public-key',
          transports: 'usb',
          counter: 0,
        },
      ];

      const result = await passkeyService.verifyAssertion(passkey as any, authenticators);

      assert.strictEqual(result, null);
    });
  });
});
