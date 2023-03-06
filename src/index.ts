import Eris from "eris";

import pingCommand from "./commands/ping";

import helloCommand from "./commands/hello";


const bot = Eris(`Bot ${process.env.DISCORD_TOKEN}`);

bot.on("ready", () =>

	console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`));


bot.on("messageCreate", (message) => {

  if (message.content.startsWith("!")) {

    // Parse the command from the message content

    const [command, ...args] = message.content.slice(1).split(" ");

    // Handle the command based on its name

    switch (command) {

      case "ping":

        pingCommand(bot, message, args);

        break;

      case "hello":

        helloCommand(bot, message, args);

        break;

      default:

        bot.createMessage(message.channel.id, "Unknown command.");

        break;

    }

  }

});

async function startBot() {

  await bot.connect();

  console.log("Bot is now running.");

}

startBot();

