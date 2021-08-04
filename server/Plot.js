const themes = require('./themes.json');

class Plot {
    constructor(player, playerOrder) {
        this.theme = themes[Math.floor(Math.random() * themes.length)];
        this.owner = player.num;
        this.playerOrder = playerOrder;
        this.drawings = [];
        this.drawers = [];
        this.pos = 0;
    }
}

module.exports = Plot;