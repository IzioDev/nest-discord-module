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
}
