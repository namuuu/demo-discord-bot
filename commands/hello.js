module.exports = {
    name: 'hello',
    execute: function(message, args) {
        message.channel.send('Hello, world!');
    }
}