/** @format */

const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  devOnly: false,
  run: async ({ interaction, client, handler }) => {
    const button = new ButtonBuilder()
      .setCustomId("reply")
      .setStyle(ButtonStyle.Primary)
      .setLabel("Ping Again!");

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: `Pong! ${client.ws.ping}ms`,
      components: [row],
    });
  },
};
