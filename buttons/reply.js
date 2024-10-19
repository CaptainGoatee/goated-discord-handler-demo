/** @format */

module.exports = {
  customID: "reply",
  run: ({ interaction, client, handler }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
