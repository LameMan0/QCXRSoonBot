/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */


module.exports = {
    data: new SlashCommandBuilder()
      .setName('lameman')
      .setDescription('lameman'),
  
    async execute(interaction) {
		message.channel.send({ content: "lameman..." });
	},
};
