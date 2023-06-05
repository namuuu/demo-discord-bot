const fs = require('fs');

const buttons = new Map();

module.exports = {
    buttons: buttons,
    setupButtons() {
        console.groupCollapsed("-- Buttons --");
        const eventFiles = fs.readdirSync("./interactions/buttons").filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            console.log(`Loading button: ${file}`);
            const button = require(`./../interactions/buttons/${file}`);
            buttons.set(button.name, button);
        }
        console.groupEnd();
    }
}