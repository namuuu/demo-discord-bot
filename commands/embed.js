const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'embed',
    execute: function(message, args) {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://pit.fr')
        .setDescription('Some description here')
        .setThumbnail('https://media.licdn.com/dms/image/C4E0BAQHD5Ca_DRknjA/company-logo_200_200/0/1652347853729?e=2147483647&v=beta&t=4GdCFlkDUa0XZN51jaNMZQmofVJrVifUUsur7s70yV8')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://media.licdn.com/dms/image/C4E0BAQHD5Ca_DRknjA/company-logo_200_200/0/1652347853729?e=2147483647&v=beta&t=4GdCFlkDUa0XZN51jaNMZQmofVJrVifUUsur7s70yV8')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here' });

    message.channel.send({ embeds: [exampleEmbed] });
    }
}