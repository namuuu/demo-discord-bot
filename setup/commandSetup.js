const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = {
  setupCommands(client) {
    //console.log(commandFolders);
    console.groupCollapsed("-- Commands --");
    client.commands = new Collection(); 
    // Get every JS command file
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    // Setup a new collection for the commands
    for (const file of commandFiles) {
      console.log(`Loading command: ${file}`);
      const command = require(`./../commands/${file}`);
      client.commands.set(command.name, command);
    }
    console.groupEnd();
  }
}