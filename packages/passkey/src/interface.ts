/**
 * Authenticator transport type
 */
export type AuthenticatorTransport = 'usb' | 'nfc' | 'ble' | 'cable' | 'internal';

/**
 * Passkey component options
 */
export interface PasskeyOptions {
  /**
   * Relying Party information
   */
  rp: {
    /**
     * Relying Party name displayed to the user
     */
    name: string;
    /**
     * Relying Party ID (domain)
     */
    id: string;
  };
  /**
   * Origin URL (e.g., http://localhost:7001)
   */
  origin: string;
  /**
   * Timeout in milliseconds
   * @default 90000
   */
  timeout?: number;
  /**
   * Attestation type
   * @default 'none'
   */
  attestation?: 'none' | 'direct' | 'indirect';
  /**
   * Cryptographic parameters
   * -7 = ES256, -257 = RS256
   * @default [-7, -257]
   */
  cryptoParams?: number[];
  /**
   * Require resident key on authenticator
   * @default false
   */
  authenticatorRequireResidentKey?: boolean;
  /**
   * User verification preference
   * @default 'preferred'
   */
  authenticatorUserVerification?: 'required' | 'preferred' | 'discouraged';
}

/**
 * Authenticator token stored in database
 */
export interface AuthenticatorToken {
  /**
   * Credential ID (base64URL encoded)
   */
  credId: string;
  /**
   * Public key in PEM format
   */
  publicKey: string;
  /**
   * Credential type (public-key)
   */
  type: string;
  /**
   * Transports supported (comma-separated)
   */
  transports: string;
  /**
   * Signature counter
   */
  counter: number;
  /**
   * Associated user ID
   */
  userId?: number | string;
}

/**
 * Registration options for creating a passkey
 */
export interface RegistrationOptions {
  challenge: ArrayBuffer;
  challengeBase64: string;
  userIdBase64: string;
  rp: {
    name: string;
    id: string;
  };
  user: {
    id: Uint8Array;
    name: string;
    displayName: string;
  };
  timeout: number;
  attestation: string;
  cryptoParams: number[];
  authenticatorSelection: {
    requireResidentKey: boolean;
    userVerification: string;
  };
  excludeCredentials?: {
    id: string;
    type: 'public-key';
    transports?: AuthenticatorTransport[];
  }[];
}

/**
 * Assertion options for passkey authentication
 */
export interface AssertionOptions {
  challenge: ArrayBuffer;
  challengeBase64: string;
  timeout: number;
  userVerification: string;
  allowCredentials?: {
    id: string;
    type: 'public-key';
    transports?: AuthenticatorTransport[];
  }[];
  status: 'ok';
}
