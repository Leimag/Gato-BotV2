const Command = require("../Structures/Command.js");
const fetch = require("node-superfetch");
const {MessageEmbed} = require("discord.js");
module.exports = new Command({
    name: "meme",
	description: "memes",
	timeout: 100,
	async run(message, args, client) {

        let {body} = await fetch.get("https://meme-api.herokuapp.com/gimme/memes")
        const embed = new MessageEmbed()
            .setTitle(body.title)
            .setImage(body.url)
            .setURL(body.postLink)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(`Posted on r/${body.subreddit}, Upvotes: ${body.ups}`)

        message.reply({embeds: [embed]})
    }
})

// very good at coding js yesyes

// very good at coding js yesyes

// very good at coding js yesyes (it's a cap)