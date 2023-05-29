/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');


module.exports = {
    data: new SlashCommandBuilder()
      .setName('lameman')
      .setDescription('lameman'),
  
    async execute(interaction) {
		message.channel.send({ content: "lameman..." });
	},
};
