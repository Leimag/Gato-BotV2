//Main Code for Launching the bot
console.clear();
const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const client = new Client();
const fs = require("fs")
process.on('unhandledRejection', error => {
	if(error.message === "Unknown Message") return;
	var readmessagefile = fs.readFileSync(`./Database/error.txt`, 'utf-8');
	fs.writeFileSync(`./Database/error.txt`, `${error}\n${readmessagefile}`)
	console.log(error)
});
//Error Handler from Chris_0x84#0001 :3
client.start(config.token);