const Discord = require("discord.js");
const {Permissions} = require("discord.js");
const ms = require("ms");
const Event = require("../Structures/Event.js");
const timeout = new Discord.Collection()
module.exports = new Event("messageCreate", (client, message) => {
	if(message.author.bot) return;
	if(!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);
	const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase());
	if(!command) return message.reply(`${args[0]} is not a valid command!`);
	if(command.args && args.slice(1).join(" ") === "" && message.mentions.channels.size === 0 && message.mentions.members.size === 0) return message.reply("This command can only be used with args!");

	if(command.permission === "admin") {
		if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("You do not have the permissions to run this command!");
	} else if(command.permission === "send messages") {
		if(!message.member.permissions.has(Permissions.FLAGS.SEND_MESSAGES)) return message.reply("You do not have the permissions to run this command!");
	} else if(command.permission === "delete messages") {
		if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("You do not have the permissions to run this command!");
	} else if(command.permission === "ban member") {
		if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("You do not have the permissions to run this command!");
	} else if(command.permission === "kick member") {
		if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("You do not have the permissions to run this command!");
	}

	//Fixed by Chris_0x84#0001 :3
	if(command) {
		if(command.timeout) {
			if(timeout.has(`${command.name}${message.author.id}`)) return message.reply(`You are in a \`${ms(timeout.get(`${command.name}${message.author.id}`) -Date.now(), {long: true})}\` cooldown!`)
			command.run(message, args, client);
			timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
			setTimeout(() => {timeout.delete(`${command.name}${message.author.id}`)}, command.timeout)
		}
	}
});