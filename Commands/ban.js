const Command = require("../Structures/Command.js");
const {MessageEmbed} = require("discord.js")
module.exports = new Command({
	name: "ban",
	description: "bans member",
	timeout: 100,
	args: true,
	permission: "ban member",
	async run(message, args, client) {
		let reason = args.slice(2).join(" ") || "No Reason Provided!"
		let Ban = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
		if(!Ban) return message.channel.send("You did not provide a valid user to ban!")
		if(!args[0]) return message.channel.send("Mention a user!")
		if(!Ban.bannable) return message.reply("I cannot ban this user!")
		const Embed = new MessageEmbed().setTitle(`You have been banned from ${message.guild.name}`).setDescription(`Reason: ${reason}!\n Banned by: ${message.member.name}`).setColor("RED").setFooter(`Sorry, not sorry!`)
		const sendEmbed = new MessageEmbed().setTitle(`:rocket: Successfully banned user!`)
		await Ban.send({embeds: [Embed]})
		await Ban.ban({days: `7`, reason: reason,}).catch(err => console.log(err)).then(() => message.reply({embeds: [sendEmbed]}))
	}
});