import { Client } from 'discord.js';
import { Provider } from '@nestjs/common';

export const createDiscordProviders = (
  client: Client,
  providerName: string,
): Provider<any>[] => {
  return [
    {
      provide: providerName,
      useFactory: () => client,
    },
  ];
};
