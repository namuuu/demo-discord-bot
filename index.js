// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const { setupCommands } = require('./setup/commandSetup.js');

// Create a new client instance
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]});

setupCommands(client);

// Setup mongo
Client.client = client;

// Prevents a weird node warning
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

client.once('ready', () => {
  console.log('\u001b[1;m Bot is ready.' + ' \u001b[0m');
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(client.commands.has(commandName)) {
      const command = client.commands.get(commandName);
      try {
        command.execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
      }
    }
});

client.login(process.env.BOT_TOKEN);