import Eris from "eris";
const bot = Eris(`Bot ${process.env.DISCORD_TOKEN}`);

bot.on("ready", () =>
	console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`)
);

bot.on("messageCreate", (message) => {

	if (message.content === "!ping") {

		bot.createMessage(message.channel.id, "Pong!");

	} else if (message.content === "Hello") {

		bot.createMessage(message.channel.id, "Choo choo! 🚅");

	} else if (message.content === "hello") {

		const username = message.author.username;

		bot.createMessage(message.channel.id, `Fuck Off Mother fucker **${username}**!! 😎`);

	}

});

await bot.connect();
