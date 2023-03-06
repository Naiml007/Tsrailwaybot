import Eris from "eris";

export default function pingCommand(bot: Eris.Client, message: Eris.Message) {

  bot.createMessage(message.channel.id, "Pong!");

}

