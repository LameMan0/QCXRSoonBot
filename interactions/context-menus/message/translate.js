const { ContextMenuInteraction, MessageEmbed } = require('discord.js');
const openai = require('openai');

module.exports = {
  name: 'Translate',
  type: 'MESSAGE',

  async execute(interaction) {
    if (!(interaction instanceof ContextMenuInteraction)) {
      return;
    }

    const { content } = await interaction.target.fetch();
    const translatedText = await translateText(content);

    const embed = new MessageEmbed()
      .setColor('BLUE')
      .setTitle('Translated to English Language')
      .addFields(
        {
          name: 'Your text:',
          value: `\`\`\`${content}\`\`\``
        },
        {
          name: 'Translated text:',
          value: `\`\`\`${translatedText}\`\`\``
        }
      )
      .setFooter({
        text: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true })
      })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};

async function translateText(textToTranslate) {
  const openaiClient = new openai.LanguageModelApi('YOUR_OPENAI_API_KEY');
  const prompt = `Translate "${textToTranslate}" to English`;
  const response = await openaiClient.complete(prompt, ['\n'], { model: 'gpt-3.5-turbo', maxTokens: 200 });
  return response.choices[0].text.trim();
}
