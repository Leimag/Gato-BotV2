class Command {
	constructor(options) {
		this.name = options.name;
		this.description = options.description;
		this.timeout = options.timeout;
		this.args = options.args;
		this.permission = options.permission;
		this.run = options.run;
	}
}
module.exports = Command;