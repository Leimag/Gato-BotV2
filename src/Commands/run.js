const Command = require('../Structures/Command.js')
const {MessageEmbed} = require("discord.js")
module.exports = new Command({
	name: "run",
	description: "run command",
	timeout: 100,
	args: true,
	permission: "admin", 
	async run(message, args, client) {
		try {
			eval(args.slice(1).join(" "))
		} catch(err) { 		
			const embed = new MessageEmbed().setTitle('Error!').setColor(0xFFFFFF).setDescription(err.message).setFooter("Embedify by AbstractKenz and was made better by Chris_0x84#0001");
		 	message.channel.send({embeds : [embed]});
		}
	}
});
//Coded by Chris_0x84#0001 made embed by AbstractKenz#9293 and made better by Chris_0x84#0001 again