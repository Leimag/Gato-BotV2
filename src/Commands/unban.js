const Command = require("../Structures/Command.js");
const {MessageEmbed} = require("discord.js")
module.exports = new Command({
	name: "unban",
	description: "unbans member",
	timeout: 100,
	args: true,
	permission: "ban member",
	async run(message, args, client) {
		//let bannedMemberInfo = await message.guild.fetchBans()
        //let bannedMember = bannedMemberInfo.get(args.slice(1).join(" "))
        let reason = args.slice(2).join(" ") || "No Reason"

        try {
            await message.guild.members.unban(args.slice(1).join(" "), reason)
            var embed = new MessageEmbed().setDescription(`:rocket: ${args.slice(1).join(" ")} was unbanned for ${reason}`)
            message.reply({embeds: [embed]})
        } catch(err) {
            var embed1 = new MessageEmbed().setDescription(`I can't find user ${args.slice(1).join(" ")}`)
            message.reply({embeds: [embed1]})
        }
	}
});
//Made by Chris