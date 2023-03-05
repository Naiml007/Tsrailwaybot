import Eris from "eris";

const bot = Eris(`Bot ${process.env.DISCORD_TOKEN}`);

bot.on("ready", () => {

    console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`);

});

bot.on("messageCreate", async (message) => {

    if (message.content === "!ping") {

        bot.createMessage(message.channel.id, "Pong!");

    } else if (message.content === "Hello") {

        bot.createMessage(message.channel.id, "Choo choo! 🚅");

    } else if (message.content.startsWith("!kick")) {

        const member = message.member;

        const guild = message.channel.guild;

        const user = message.mentions[0];

        if (!member.permissions.has("kickMembers")) {

            bot.createMessage(

                message.channel.id,

                "You don't have permission to kick members."

            );

            return;

        }

        if (!user) {

            bot.createMessage(message.channel.id, "Please mention a user to kick.");

            return;

        }

        try {

            await guild.kickMember(user.id, "Kicked by a moderator.");

            bot.createMessage(

                message.channel.id,

                `${user.username}#${user.discriminator} has been kicked.`

            );

        } catch (err) {

            bot.createMessage(message.channel.id, "Failed to kick the user.");

        }

    }

});

bot.connect();

