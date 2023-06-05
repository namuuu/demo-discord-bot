const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: 'button',
    execute: function(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pong')
                    .setLabel('Primary')
                    .setStyle(ButtonStyle.Primary),
            );
        interaction.reply({ content: 'Ping!', components: [row] });
    }
}