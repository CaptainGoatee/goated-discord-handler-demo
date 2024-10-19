/** @format */

const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

const BUTTON_ID = "hello";
const BUTTON_LABEL = "Ping Again";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),

  run: async ({ interaction, client }) => {
    try {
      // Create a button
      const button = new ButtonBuilder()
        .setCustomId(BUTTON_ID)
        .setStyle(ButtonStyle.Primary)
        .setLabel(BUTTON_LABEL);

      // Create Action Row
      const row = new ActionRowBuilder().addComponents(button);

      // Reply to the interaction
      await interaction.reply({
        content: `Pong! ${client.ws.ping}ms`,
        components: [row],
      });
    } catch (error) {
      console.error("Error replying to interaction:", error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};