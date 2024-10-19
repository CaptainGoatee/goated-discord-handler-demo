/** @format */

module.exports = {
  customID: "hello",
  run: ({ interaction, client }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
