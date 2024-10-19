/** @format */

module.exports = {
  customID: "hello",
  run: ({ interaction, client, handler }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
