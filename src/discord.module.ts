import { Module, DynamicModule } from "@nestjs/common";
import { Client } from "discord.js";
import { createDiscordProviders } from "./discord.providers";
import { DiscordModuleRegisterOptions } from "./interaces/discord-module-register-options";
import {
  safeGetControllersFromOptions,
  getPreferedProviderName
} from "./discord.utils";

@Module({})
export class DiscordModule {
  static async register(
    clientToken: string,
    options?: DiscordModuleRegisterOptions
  ): Promise<DynamicModule> {
    if (!clientToken.length) {
      throw new Error(
        "Bad argument for register method, expected token to be a valid string. Is the token good?"
      );
    }

    return new Promise((res, rej) => {
      const client = new Client();

      client.on("ready", () => {
        if (options && options.discrodListeners) {
          // Bind listeners.
          options.discrodListeners.map(discordListener => {
            const { eventName, handler } = discordListener;

            client.on(eventName, handler);
          });
        }

        // Get the preferred Injector name.
        const providerName = getPreferedProviderName(options);

        // Return the instanciated module.
        const providers = createDiscordProviders(client, providerName);
        return res({
          controllers: safeGetControllersFromOptions(options),
          module: DiscordModule,
          providers: providers,
          exports: providers
        });
      });

      client.on("error", error => {
        throw new Error(error.message + ". Is the token good?");
      });

      client.login(clientToken);
    });
  }
}
