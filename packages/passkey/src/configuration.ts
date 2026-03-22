import { Configuration, IMidwayContainer } from '@midwayjs/core';
import * as DefaultConfig from './config/config.default';
import { PasskeyService } from './service/passkey';
import { WebAuthNService } from './service/webauthn';

@Configuration({
  namespace: 'passkey',
  importConfigs: [
    {
      default: DefaultConfig,
    },
  ],
})
export class PasskeyConfiguration {
  async onReady(container: IMidwayContainer) {
    // Initialize services on ready
    await container.getAsync(WebAuthNService);
    await container.getAsync(PasskeyService);
  }
}
