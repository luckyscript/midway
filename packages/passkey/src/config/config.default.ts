import { PasskeyOptions } from '../interface';

export default {
  passkey: {
    rp: {
      name: 'Midway Application',
      id: 'localhost',
    },
    origin: 'http://localhost:7001',
    timeout: 90000,
    attestation: 'none',
    cryptoParams: [-7, -257],
    authenticatorRequireResidentKey: false,
    authenticatorUserVerification: 'preferred',
  } as PasskeyOptions,
} as any;
