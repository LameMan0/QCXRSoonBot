const { PermissionFlagsBits } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');
module.exports = {
      data: new SlashCommandBuilder()
          .setName('v3info')
          .setDescription('Info about V3')
          .setDefaultPermissions(PermissionsBitField.ChangeNickname),
      async execute(interaction) {
                await interaction.reply('In QCXR V3.0, we are departing from using MCXR, to Vivecraft.');
      },
};
