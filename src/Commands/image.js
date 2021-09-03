const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const axios = require("axios");
module.exports = new Command({
	name: "gato",
	description: "shows image",
	timeout: 100,
	async run(message, args, client) {
		axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
			const embed = new Discord.MessageEmbed({})
				.setTitle("Very cute cat, yes?")
				.setImage(res.data[0].url)
				.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
				.setFooter("Bot made by strafe, GatoLeimag and Chris and Abstractkenz")
				.setColor("WHITE")
			message.reply({embeds: [embed]});
		})
	}
})
//Coded by GatoLeimag