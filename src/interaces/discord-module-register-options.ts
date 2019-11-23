import { Type } from "@nestjs/common";
import { DiscordClientEvent } from "../types/client-event";

export interface IDiscordListener {
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
  discrodListeners?: IDiscordListener[];
  /**
   * @optional
   * Change the Injector name. Default: `discordBot`
   */
  overridedProviderName?: string;
}
