const Command = require("../Structures/Command.js");
module.exports = new Command({
	name: "say",
	description: "bruh",
	timeout: 5000,
	args: true,
	permission: "send message",
	async run(message, args, client) {
		await message.delete();
		message.channel.send(args.slice(1).join(" "));
	}
});
//Fixed by Chris_0x84#0001, Base by GatoLeimag