const Plot = require('./Plot.js');
const { matches, io } = require('./');

const defaultPlayer = {
    connected: true,
    dead: false,
    playIn: 0,
    hand: [],
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

class Match {
    constructor(options) {
        this.started = false;
        this.startTimer = 6;
        this.maxPlayers = options.players;
        this.setOptions(options);
        this.players = {};
        this.host = null;
        this.drawingNum = 0;
        this.finished = [];
        this.presentPhase = false;
    }

    setOptions(options) {
        this.isPublic = options.public;
        this.matchUpdate();
    }

    playerInfo(fn=null) {
        return Object.keys(this.players).map(player => {
            let p = {
                id: player.slice(0,6),
                num: this.players[player].num,
                name: this.players[player].name,
                bot: this.players[player].bot,
            };
            if (fn != null) p = {...p, ...fn(this.players[player])}
            return p;
        });
    }

    matchInfo() {
        return {
            starting: this.started,
            startTimer: this.startTimer,
            host: this.host ? this.host.slice(0, 6) : null,
            started: this.turnNum > 0,
            code: this.code,
            options: {
                public: this.isPublic,
                players: this.maxPlayers,
            },
            players: this.playerInfo()
        };
    }

    matchUpdate() {
        setTimeout(() => {
            io.to(this.code).emit('matchUpdate', this.matchInfo());
        }, 100);
    }

    join(player) {
        let numsTaken = Object.values(this.players).map(p => p.num);
        let numsAvailable = [...Array(25).keys()].filter(n => !numsTaken.includes(n));
        let num = numsAvailable[Math.floor(Math.random() * numsAvailable.length)];
        this.players[player] = {
            ...JSON.parse(JSON.stringify(defaultPlayer)),
            socket: io.sockets.sockets.get(player),
            name: io.sockets.sockets.get(player).username,
            num,
            difficulty: 1,
        }
        if (Object.keys(this.players).length == 1)
            this.host = Object.keys(this.players)[0];
        this.setNum(player, this.players[player].socket.num);
        this.matchUpdate();
    }

    setNum(player, num) {
        if (Object.values(this.players).every(p => p.num != num) && this.players[player].num != num) { //if no one is already using this number and this number is different to the player's current number
            this.players[player].num = num;
            this.matchUpdate();
        }
    }

    leave(player) {
        if (!this.started) {
            delete this.players[player];
            
            if (Object.keys(this.players).length == 0 || !(Object.values(this.players).some(p => p.connected))) //if there are no connected players left
                delete matches[this.code];
            else {
                if (!this.players.hasOwnProperty(this.host))
                    this.host = Object.keys(this.players)[0];
                this.matchUpdate();
            }
        } else {
            this.players[player].connected = false;
            if (!(Object.values(this.players).some(p => p.connected))) { //if there are no connected players left
                if (this.turnNum > 0)
                    this.treasuresFound = Infinity;
                else
                    this.ditchGame = true;
            } else {
                //this.players[player].name += '(🤖)';
            }
        }
    }

    kick(player, kicker) {
        if (kicker == this.host && !this.started) {
            let toKick = Object.keys(this.players).find(p => p.startsWith(player));
            if (toKick != null && toKick != kicker) {
                if (this.players[toKick].bot) {
                    delete this.players[toKick];
                } else {
                    this.leave(toKick);
                    let socket = io.sockets.sockets.get(toKick);
                    socket.emit('kicked', io.sockets.sockets.get(kicker).username);
                    socket.disconnect();
                }
                this.matchUpdate();
            }
        }
    }

    promote(player, promoter) {
        if (promoter == this.host && !this.started) {
            let toPromote = Object.keys(this.players).find(p => p.startsWith(player));
            if (toPromote != null && toPromote != promoter && !this.players[toPromote].bot) {
                this.host = toPromote;
                this.matchUpdate();
            }
        }
    }

    startStartTimer(player) {
        if (player == this.host && !this.started && Object.keys(this.players).length >= 3) {
            this.hostNum = this.players[this.host].num;
            this.started = true;
            delete this.rejoinCode;
            this.updateStartTimer();
        }
    }

    updateStartTimer() {
        this.startTimer--;
        if (this.startTimer <= 0) {
            this.start();
        } else {
            this.matchUpdate();
    
            setTimeout(this.updateStartTimer.bind(this), 1000);
        }
    }

    start() {
        this.playersPlaying = Object.keys(this.players).length;

        //set up players
        let matchInfo = {
            players: this.playerInfo(),
            options: this.matchInfo().options,
            code: this.code,
            drawingNum: this.drawingNum,
            finished: this.finished,
        };

        let playerNums = shuffleArray(Object.values(this.players).map(p => p.num));
        let plotPlayers = playerNums.map((e, i) => [...playerNums.slice(i), ...playerNums.slice(0, i)]);

        this.plots = [];
        playerNums.forEach((num, index) => {
            let player = Object.values(this.players).find(p => p.num == num);
            let plot = new Plot(player, plotPlayers[index]);
            this.plots.push(plot);

            let startInfo = {
                ...matchInfo,
                theme: plot.theme,
                num: player.num,
            };

            player.socket.emit('matchStart', startInfo);
            player.startInfo = JSON.stringify(startInfo);
        });

        if (this.ditchGame)
            this.endMatch();
    }

    submit(player, drawing) {
        let plot = this.plots.find(p => p.playerOrder[this.drawingNum] == this.players[player].num);
        if (plot.drawings.length == this.drawingNum) {
            plot.drawings.splice(plot.pos, 0, drawing);
            plot.drawers.splice(plot.pos, 0, this.players[player].num);
            this.finished.push(this.players[player].num);
            if (this.finished.length == this.playersPlaying)
                this.nextDrawing();
            else
                io.to(this.code).emit('wait', this.finished);
        }
    }

    nextDrawing() {
        this.drawingNum++;
        this.finished = [];
        io.to(this.code).emit('wait', this.finished);
        if (this.drawingNum < this.playersPlaying) {
            Object.values(this.players).forEach((player, index) => {
                let plot = this.plots.find(p => p.playerOrder[this.drawingNum] == player.num);
                if (this.drawingNum == 1) {
                    plot.pos = 1;
                    player.socket.emit('newDrawing', plot.theme);
                } else {
                    plot.pos = Math.floor(Math.random() * (plot.drawings.length - 1)) + 1;
                    player.socket.emit('newDrawing', plot.drawings.slice(plot.pos-1, plot.pos+1));
                }
            });
        } else {
            this.present();
        }
    }

    present() {
        shuffleArray(this.plots);
        this.presentPhase = true;
        this.presenting = 0;
        this.presentingImage = 0;
        let matchInfo = {
            players: this.playerInfo(),
            options: this.matchInfo().options,
            code: this.code,
            plots: this.plots,
            presenting: this.presenting,
            presentingImage: this.presentingImage,
            host: this.hostNum,
        };
        this.rjCode = String(Math.random()).slice(2);
        Object.entries(this.players).forEach(player => {
            let presentInfo = {
                ...matchInfo,
                num: player[1].num,
                amHost: player[1].num == this.hostNum,
            };
            player[1].socket.emit('present', presentInfo, this.rjCode);
            player[1].presentInfo = JSON.stringify(presentInfo);
        });
        io.to(this.code).emit('wait', this.finished);
    }

    presentNext() {
        this.presentingImage++;
        if (this.presentingImage > this.plots[this.presenting].drawings.length) {
            this.presenting++;
            this.presentingImage = 0;
            io.to(this.code).emit('presentNewPlot');
        } else {
            io.to(this.code).emit('presentNewDrawing');
            if (this.presenting == this.plots.length-1 && this.presentingImage == this.plots[this.presenting].drawings.length)
                this.endMatch();
        }
    }

    endMatch() {
        Object.values(this.players).forEach(p => {
            p.socket.leave(this.code);
            p.socket.ingame = false;
        });
        delete matches[this.code];
    }
}

module.exports = Match;
