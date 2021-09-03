const Command = require("../Structures/Command.js");
const {MessageEmbed, MessageButton} = require("discord.js")
const paginationEmbed = require('discordjs-button-pagination')
module.exports = new Command({
	name: "help",
	description: "help panel",
	timeout: 100,
	permission: "send messages",
	async run(message, args, client) {
		const embed1 = new MessageEmbed().setTitle("Fun Commands").setColor("BLUE").addFields({
			name: 'run',
			value: 'It runs an argument.',
			inline: true
		}, {
			name: 'spam',
			value: 'Spams a message! (Can only spam 100 messages.).',
			inline: true
		}, {
			name: 'ping',
			value: 'Checks for the bots ping!',
			inline: true
		}, {
			name: 'gato',
			value: 'Sends a random cat image :3',
			inline: true
		}, {
			name: 'say',
			value: 'The bot sends whatever you say to it! (eg: .say gato)',
			inline: true
		}, {
			name: 'members',
			value: 'The bot sends the current member count for the server!',
			inline: true
		}, {
			name: 'avatar',
			value: 'Sends the person mentioned (or if you didnt insert anything, your avatar) in the message.',
			inline: true
		}).setFooter("Bot made by strafe, GatoLeimag , Chris And AbstractKenz(i am the dumbest)");
		const embed2 = new MessageEmbed().setAuthor("Moderation Commands").setColor("RED").addFields({
			name: 'kick',
			value: 'Kicks user mentioned.',
			inline: true
		}, {
			name: 'ban',
			value: 'Bans user mentioned.',
			inline: true
		}, {
			name: 'purge',
			value: 'Purges messages.',
			inline: true
		}, {
			name: 'unban',
			value: 'Unbans user using the user id.',
			inline: true
		}).setFooter("Bot made by strafe, GatoLeimag and Chris");
		const button1 = new MessageButton().setLabel("Back").setStyle("SECONDARY").setCustomId("previousbtn")
		const button2 = new MessageButton().setLabel("Next").setStyle("SECONDARY").setCustomId("nextbtn")
		const pages = [embed1, embed2]
		const buttons = [button1, button2]
		paginationEmbed(message, pages, buttons, 60000);
	}
})
