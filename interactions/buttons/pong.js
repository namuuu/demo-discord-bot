module.exports = {
    name: 'pong',
    execute: function(interaction) {
        interaction.reply({ content: 'Pong!', ephemeral: true });
    }
}