const { Client, IntentsBitField } = require("discord.js");
const { DiscordHandler } = require("goated-discord-handler");
const { Logger } = require("term-logger"); // Fancy Colourful Console Logger
const path = require("path");

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds], // Your bot's intents
});

new DiscordHandler({
  client, // Discord.js client object
  token: 'YOUR_TOKEN_HERE',
  commandsPath: path.join(__dirname, "commands"), // The commands folder
  // buttonsPath: path.join(__dirname, "buttons"), // The commands folder
  eventsPath: path.join(__dirname, "events"), // The events folder
  validationsPath: path.join(__dirname, "validations"), // Only works if commandsPath is provided
  logger: Logger, // Changes the console output to match the specified logger configuration (if not provided logging will go through console.log)
  logInteractions: true, // If true, will log interactions made with the bot in your console.
});
