import { DiscordModuleRegisterOptions } from './interaces/discord-module-register-options';

export const safeGetControllersFromOptions = (
  options?: DiscordModuleRegisterOptions,
) => (options && options.controllers ? options.controllers : []);

export const getPreferedProviderName = (
  options?: DiscordModuleRegisterOptions,
) =>
  options && options.overridedProviderName
    ? options.overridedProviderName
    : 'discordBot';

export const getPreferedTimeoutDuration = (
  options?: DiscordModuleRegisterOptions,
) =>
  options && options.timeoutDuration ? options.timeoutDuration * 1000 : 30000;
