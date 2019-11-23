# nest-discord-module

## Description

Allow to integrate a discord bot inside a NestJs app. This package uses custom module loader.

## Features

- Add controller to the discord module, so it can do neat things.
- Add handlers on `native` discord.js `events`.
- Inject the `client` object everywhere.
- Change the provider name (so you can use it as you want)

## Example

`app.module.ts`

```ts
@Module({
  imports: [
    ...,
    DiscordModule.register(
      "my-secret-token",
      {
        // An optional list of controllers
        controllers: [DiscordBotController],
        // An optional list of listeners
        discrodListeners: [DiscordListenerExample],
        // Allow to override the providerName
        overridedProviderName: "mySuperNewName",
      }
    )
  ]
})
export class AppModule {}
```

`discord-bot-controller.ts`

```ts
@Controller("/discord")
export class DiscordBotController {
  // Replace `discordBot` by the overridedName if you used this option
  constructor(@Inject("discordBot") private discordBot: Client) {}

  @Get("/")
  async sendMessage() {
    const botChannel = this.discordBot.guilds
      .first()
      .channels.find("name", "bot");

    const izio = this.discordBot.guilds
      .first()
      .members.find("displayName", "Izio");

    if (botChannel instanceof TextChannel) {
      botChannel.sendMessage("Hellow you! ", { reply: izio });
    }
  }
}
```

`discord-listener-example.ts`

```ts
export const DiscordListenerExample = {
  eventName: "message"
  handler = (message) => {
    message.reply("Stop spaming here!");
  }
}
```

# Contributions

Feel free to open pull requests.
