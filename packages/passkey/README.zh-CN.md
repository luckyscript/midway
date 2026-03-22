# @midwayjs/passkey

MidwayJS Passkey 组件，用于 WebAuthn 认证。

## 安装

```bash
$ npm i @midwayjs/passkey fido2-lib
```

## 配置

将组件添加到配置中：

```typescript
// src/configuration.ts
import { Configuration } from '@midwayjs/core';
import * as passkey from '@midwayjs/passkey';

@Configuration({
  imports: [passkey],
})
export class MainConfiguration {}
```

在 `src/config/config.default.ts` 中设置 passkey 选项：

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

## 使用方法

### 注册新的 passkey

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
    const user = this.ctx.session.user;
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
    const token = await this.passkeyService.verifyRegistration(passkey);

    await this.saveAuthenticator({
      ...token,
      userId: this.ctx.session.user.id,
    });

    return { success: true };
  }
}
```

### 使用 passkey 认证

```typescript
@Controller('/api')
export class PasskeyController {
  @Inject()
  ctx: Context;

  @Inject()
  passkeyService: PasskeyService;

  @Get('/passkey/login/options')
  async getLoginOptions() {
    const credentials = await this.getUserCredentials(userId);
    return this.passkeyService.getAssertionOptions(credentials);
  }

  @Post('/passkey/login')
  async loginWithPasskey() {
    const passkey = this.ctx.request.body;
    const authenticators = await this.getUserCredentials(userId);

    const validAuthenticator = await this.passkeyService.verifyAssertion(
      passkey,
      authenticators
    );

    if (validAuthenticator) {
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

## 前端集成

### 注册

```javascript
const options = await fetch('/api/passkey/register/options').then(r => r.json());

const credential = await navigator.credentials.create({
  publicKey: options,
});

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

### 认证

```javascript
const options = await fetch('/api/passkey/login/options').then(r => r.json());

const credential = await navigator.credentials.get({
  publicKey: options,
});

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

## API 参考

### PasskeyService

- `getRegistrationOptions(user, excludeCredentials)` - 生成注册选项
- `verifyRegistration(passkey)` - 验证注册响应
- `getAssertionOptions(allowCredentials)` - 生成认证选项
- `verifyAssertion(passkey, authenticators)` - 验证认证响应

### WebAuthNService

- `registration(user)` - 生成注册挑战
- `attestation(response, challenge)` - 验证 attestation
- `login(allowCredentials)` - 生成认证挑战
- `assertion(response, expectations)` - 验证 assertion
- `base64URLencode(buffer)` - ArrayBuffer 转 base64URL
- `base64URLdecode(base64URL)` - base64URL 转 ArrayBuffer

## License

MIT
