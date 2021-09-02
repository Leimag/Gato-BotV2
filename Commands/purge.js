const Command = require("../Structures/Command.js");
module.exports = new Command({
	name: "purge",
	description: "purge message",
	timeout: 1000,
	args: true,
	permission: "delete messages",
	async run(message, args, client) {
		const amount = args[1];
		if(!amount || isNaN(amount)) return message.reply(`${amount} is not a number!`);
		const amountParsed = parseInt(amount);
		if(amountParsed > 100) return message.reply(`You can't purge more than 100 messages!`);
		message.channel.bulkDelete(amountParsed);
		const msg = await message.channel.send(`${message.member.user.username}, I Purged ${amountParsed} messages!`)
		setTimeout(() => msg.delete(), 10000);
	}
})