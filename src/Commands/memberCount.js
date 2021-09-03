const Command = require("../Structures/Command.js");
const {MessageEmbed} = require("discord.js")
module.exports = new Command({
	name: "members",
	description: "member count",
	timeout: 100,
	permission: "send messages",
	async run(message, args, client) {
		const embed = new MessageEmbed().addFields({name: '<:catthumbsup:882611427469324289>​‌‌‌​‌‌‌​‌​​​​‌​​​‌‌​‌​​​​‌‌​​‌​​​‌‌​‌​‌​‌‌‌​‌‌​​‌​​​‌​​​‌​​​​‌‌ Total Members', value: `Members: ${message.guild.memberCount}`, inline: true}).setColor("WHITE")
		message.channel.send({embeds: [embed]});
	}
})