const Command = require('../Structures/Command.js');
const {MessageEmbed} = require("discord.js") //thanks lol i forget about this
module.exports = new Command({
	name: "ping",
	description: "shows ping",
	timeout: 100,
	permission: "send messages",
	async run(message, args, client) {
		const embed = new MessageEmbed()
		.setTitle('Ping')
		.setColor(0xFFFFFF)
		.setDescription(`Pong! ${client.ws.ping}ms.`);
	  message.channel.send({embeds : [embed]}); //Embedify by AbstractKenz fixed by someone who have bigger brain than me lollll (Chris) :troll:
	}
});
//Coded (Skidded) by GatoLeimag (its from my old shitty bot - abstractkenz the smol brain)