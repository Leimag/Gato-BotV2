const Command = require("../Structures/Command.js");
module.exports = new Command({
	name: "spam",
	description: "bruh",
	timeout: 60000,
	args: true,
	permission: "send message",
	async run(message, args, client) {
		const amount = args[1];
		if(!amount || isNaN(amount)) return message.reply(`${amount} is not a number!`);
		const amountParsed = parseInt(amount);
		if(amountParsed > 100) return message.reply(`You cannot spam more than 100 messages!`);
		message.channel.send(`Okay, spamming ${args[2]} `)
		for(let i = 0; i < amountParsed; i++) {
			message.channel.send(args[2])
		}
	}
});