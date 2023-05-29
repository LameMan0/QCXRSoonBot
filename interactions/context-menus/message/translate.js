/**
 * @type {import('../../../typings').ContextInteractionCommand}
 */


const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const apiKey = 'YOUR_DEEPL_API_KEY';

module.exports = {
  data: {
    name: 'Translate',
    type: 3, // 3 is for message context menus
  },

  async execute(interaction) {
    const { channel, targetId } = interaction;

    const query = await channel.messages.fetch(targetId);
    const raw = query.content;

    const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(raw)}&target_lang=en`);
    const data = await response.json();
    const translated = data.translations[0].text;

    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor('Blue')
          .setTitle('Translated to English Language')
          .addFields(
            {
              name: 'Your text:',
              value: `\`\`\`${raw}\`\`\``,
            },
            {
              name: 'Translated text:',
              value: `\`\`\`${translated}\`\`\``,
            }
          )
          .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
          .setTimestamp(),
      ],
    });
  },
};
