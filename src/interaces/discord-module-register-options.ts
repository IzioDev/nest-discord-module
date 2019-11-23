import { Type } from '@nestjs/common';
import { DiscordClientEvent } from '../types/client-event';

export interface DiscordListener {
  eventName: DiscordClientEvent;
  handler: () => void;
}

export interface DiscordModuleRegisterOptions {
  /**
   * @optional
   * A list of controller to be instanciated
   */
  controllers?: Type<any>[];
  /**
   * @optional
   * A list of event to bind
   */
  discrodListeners?: DiscordListener[];
  /**
   * @optional
   * Change the Injector name. Default: `discordBot`
   */
  overridedProviderName?: string;
  /**
   * @optional
   * Change the duration (in seconds) within the module say stop
   * (prevent app to be blocked when discord API is down)
   * default 30 seconds
   */
  timeoutDuration?: number;
}
