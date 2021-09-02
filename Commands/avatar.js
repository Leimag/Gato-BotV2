const Command = require("../Structures/Command.js");
const {MessageEmbed, Permissions} = require("discord.js")
module.exports = new Command({
	name: "avatar",
	description: "shows avatar",
	timeout: 100,
	permission: "send messages",
	async run(message, args, client) {
		const user = await message.mentions.members.first() || message.guild.members.cache.get(args.slice(1).join(" ")) || message.member
		const uavatar = user.user.displayAvatarURL({ size: 2048, format: "png", dynamic: true})
		const embed = new MessageEmbed().setAuthor(user.user.username + "'s Avatar", uavatar, user.cache).setImage(uavatar).setColor("WHITE").setFooter(":catthumbsup: Skidded off of Chris_0x84#0001's bot.")
		message.reply({embeds: [embed]});
	}
})