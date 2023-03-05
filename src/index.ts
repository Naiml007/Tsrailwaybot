import Eris from "eris";

const bot = new Eris.Client(`Bot ${process.env.DISCORD_TOKEN}`);

bot.on("ready", () =>

  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`)

);

bot.on("messageCreate", async (message) => {

  if (message.content.startsWith("!kick")) {

    // Get the user to kick

    const userToKick = message.mentions[0];

    if (!userToKick) {

      await message.channel.createMessage(

        "You need to mention the user you want to kick!"

      );

      return;

    }

    // Check if the author has permission to kick users

    const author = message.member;

    if (!author?.permission.has("kickMembers")) {

      await message.channel.createMessage(

        "You don't have permission to kick users!"

      );

      return;

    }

    try {

      // Kick the user

      await bot.kickGuildMember(message.guildID, userToKick.id);

      await message.channel.createMessage(

        `Kicked user ${userToKick.username}#${userToKick.discriminator}!`

      );

    } catch (error) {

      console.error(error);

      await message.channel.createMessage(

        "There was an error trying to kick the user."

      );

    }

  }

});

bot.connect();

