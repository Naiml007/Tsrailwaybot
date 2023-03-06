import Eris from "eris";

export default function helloCommand(bot: Eris.Client, message: Eris.Message) {

  bot.createMessage(message.channel.id, "Choo choo! 🚅");

}

