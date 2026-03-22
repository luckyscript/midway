# @midwayjs/passkey

MidwayJS Passkey component for WebAuthn authentication.

## Installation

```bash
$ npm i @midwayjs/passkey fido2-lib
```

## Configuration

Add the component to your configuration:

```typescript
// src/configuration.ts
import { Configuration } from '@midwayjs/core';
import * as passkey from '@midwayjs/passkey';

@Configuration({
  imports: [passkey],
})
export class MainConfiguration {}
```

Set passkey options in `src/config/config.default.ts`:

```typescript
export default {
  passkey: {
    rp: {
      name: 'Your Application',
      id: 'your-domain.com',
    },
    origin: 'https://your-domain.com',
    timeout: 90000,
    attestation: 'none',
    cryptoParams: [-7, -257],
    authenticatorRequireResidentKey: false,
    authenticatorUserVerification: 'preferred',
  },
};
```

## Usage

### Register a new passkey

```typescript
import { Inject, Post } from '@midwayjs/core';
import { Context } from '@midwayjs/web';
import { PasskeyService } from '@midwayjs/passkey';

@Controller('/api')
export class PasskeyController {
  @Inject()
  ctx: Context;

  @Inject()
  passkeyService: PasskeyService;

  @Get('/passkey/register/options')
  async getRegisterOptions() {
    // Get user from session or database
    const user = this.ctx.session.user;

    // Get existing credentials to exclude
    const excludeCredentials = await this.getUsersCredentials(user.id);

    return this.passkeyService.getRegistrationOptions(
      {
        id: user.id,
        username: user.name,
        displayName: user.displayName,
      },
      excludeCredentials
    );
  }

  @Post('/passkey/register')
  async registerPasskey() {
    const passkey = this.ctx.request.body;

    // Verify and get authenticator token
    const token = await this.passkeyService.verifyRegistration(passkey);

    // Store token in your database
    await this.saveAuthenticator({
      ...token,
      userId: this.ctx.session.user.id,
    });

    return { success: true };
  }
}
```

### Authenticate with passkey

```typescript
@Controller('/api')
export class PasskeyController {
  @Inject()
  ctx: Context;

  @Inject()
  passkeyService: PasskeyService;

  @Get('/passkey/login/options')
  async getLoginOptions() {
    // Optional: get credentials for specific user
    const credentials = await this.getUserCredentials(userId);

    return this.passkeyService.getAssertionOptions(credentials);
  }

  @Post('/passkey/login')
  async loginWithPasskey() {
    const passkey = this.ctx.request.body;

    // Get user's stored credentials
    const authenticators = await this.getUserCredentials(userId);

    // Verify assertion
    const validAuthenticator = await this.passkeyService.verifyAssertion(
      passkey,
      authenticators
    );

    if (validAuthenticator) {
      // Update session with user info
      this.ctx.session.user = {
        id: validAuthenticator.userId,
        name: username,
      };
      return { success: true };
    }

    return { success: false };
  }
}
```

## Frontend integration

### Registration

```javascript
// Get registration options from server
const options = await fetch('/api/passkey/register/options').then(r => r.json());

// Create credential
const credential = await navigator.credentials.create({
  publicKey: options,
});

// Send to server for verification
await fetch('/api/passkey/register', {
  method: 'POST',
  body: JSON.stringify({
    rawId: credential.id,
    response: {
      attestationObject: bufferToBase64Url(credential.response.attestationObject),
      clientDataJSON: bufferToBase64Url(credential.response.clientDataJSON),
      transports: credential.response.getTransports(),
    },
    type: credential.type,
    transports: credential.response.getTransports(),
  }),
});
```

### Authentication

```javascript
// Get assertion options from server
const options = await fetch('/api/passkey/login/options').then(r => r.json());

// Get credential
const credential = await navigator.credentials.get({
  publicKey: options,
});

// Send to server for verification
await fetch('/api/passkey/login', {
  method: 'POST',
  body: JSON.stringify({
    rawId: credential.id,
    response: {
      authenticatorData: bufferToBase64Url(credential.response.authenticatorData),
      clientDataJSON: bufferToBase64Url(credential.response.clientDataJSON),
      signature: bufferToBase64Url(credential.response.signature),
      userHandle: bufferToBase64Url(credential.response.userHandle),
    },
  }),
});
```

## API Reference

### PasskeyService

- `getRegistrationOptions(user, excludeCredentials)` - Generate registration options
- `verifyRegistration(passkey)` - Verify and parse registration response
- `getAssertionOptions(allowCredentials)` - Generate assertion options
- `verifyAssertion(passkey, authenticators)` - Verify assertion response

### WebAuthNService

- `registration(user)` - Generate registration challenge
- `attestation(response, challenge)` - Verify attestation
- `login(allowCredentials)` - Generate assertion challenge
- `assertion(response, expectations)` - Verify assertion
- `base64URLencode(buffer)` - Encode ArrayBuffer to base64URL
- `base64URLdecode(base64URL)` - Decode base64URL to ArrayBuffer

## License

MIT
