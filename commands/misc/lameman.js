/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "lameman",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "lameman..." });
	},
};
