const Command = require("../Structures/Command.js");
const {MessageEmbed} = require("discord.js")
module.exports = new Command({
	name: "kick",
	description: "kick members, duh",
	timeout: 100,
	args: true,
	permission: "kick member",
	async run(message, args, client) {
		let reason = args.slice(2).join(" ") || "No Reason Provided!"
		let Ban = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
		if(!Ban) return message.channel.send("You did not provide a valid user to ban!")
		if(!args[0]) return message.channel.send("Mention a user!")
		if(!Ban.kickable) return message.reply("I cannot kick this user!")
		const Embed = new MessageEmbed().setTitle(`You have been kicked from ${message.guild.name}`).setDescription(`Reason: ${reason}!`).setColor("RED").setFooter(`You can join back.`)
		const sendEmbed = new MessageEmbed().setTitle(`:rocket: Successfully kicked user!`)
		await Ban.send({embeds: [Embed]})
		await Ban.kick().catch(err => console.log(err)).then(() => message.reply({embeds: [sendEmbed]}))
	}
});