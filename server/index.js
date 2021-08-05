const { SportsCricket } = require('@material-ui/icons');
const cfg = require('./cfg');
const maxUsernameLength = 8;
const allowedUsernameChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
const colorsAllowed = [...Array(25).keys()];
const playersAllowed = [3, 15];

const codeChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const drawingPrefix = 'data:image/jpeg;base64';

const io = require("socket.io")(cfg.port, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
    pingTimeout: 60000,
});

function generateUsername(socket) {
    socket.username = `P${String(Math.random()).slice(2, 2+3)}`;
}

function joinMatch(match, socket) {
    if (socket.ingame)
        return socket.emit('err');
    if (Object.keys(match.players).length >= match.maxPlayers)
        return socket.emit('err', 'That match was full or had already started.', 'Couldn\'t join match');
    match.join(socket.id);
    socket.join(match.code);
    socket.emit('joinMatch');
    socket.ingame = match.code;
}

function createMatch(socket, options) {
    if (socket != null && socket.ingame)
        return;
    let match = new Match(options);
    let code = generateMatchCode();
    matches[code] = match;
    match.code = code;
    if (socket != null)
        joinMatch(match, socket);
    setTimeout(() => {
        if (matches[code] && Object.keys(matches[code].players).length == 0)
            delete matches[code];
    }, 10000);
    return match;
}

let optionsValid = options => (
    typeof options == 'object'
    && options != null
    && typeof options.public == 'boolean'
    && Number.isInteger(options.players)
    && options.players >= playersAllowed[0]
    && options.players <= playersAllowed[1]
);

io.on('connection', socket => {
    generateUsername(socket);
    socket.num = 0;
    socket.ingame = false;

    socket.on('changeName', newName => {
        if (typeof newName == 'string' && !(socket.ingame && matches[socket.ingame].started)) {
            let usernameAllowed = true;
            for (let i of newName)
                if (!allowedUsernameChars.includes(i))
                    usernameAllowed = false;
                
            if (usernameAllowed && newName.length > 0 && newName.length <= maxUsernameLength) {
                socket.username = newName;
            } else
                generateUsername(socket);
            
            if (socket.ingame && !matches[socket.ingame].started) {
                matches[socket.ingame].players[socket.id].name = socket.username;
                matches[socket.ingame].matchUpdate();
            }
        }
    });

    socket.on('changeColor', color => {
        color = Number(color);
        if (colorsAllowed.includes(color)) {
            if (socket.ingame) {
                matches[socket.ingame].setNum(socket.id, color);
            } else {
                socket.num = color;
            }
        }
    });

    socket.on('joinMatch', code => {
        if (typeof code == 'string' && matches.hasOwnProperty(code.toUpperCase())) {
            let match = matches[code.toUpperCase()];
            if (Object.keys(match.players).length < match.maxPlayers || match.started) {
                if (!match.started)
                    joinMatch(match, socket);
                else {
                    let disconnected = Object.values(match.players).filter(p => !p.connected);
                    if (disconnected.length > 0) {
                        socket.emit('comebackchoice', disconnected.map(p => ({
                            name: p.name,
                            num: p.num,
                        })), match.code);
                    } else
                        socket.emit('err', ':(', 'That match has already started.');
                }
            } else
                socket.emit('err', `It's reached its ${match.maxPlayers} player limit, and no more players can join.`, 'That match is full.');
        } else
            socket.emit('err', 'Try again.', 'Invalid room code')
    });

    socket.on('findMatch', () => {
        let matchesAvailable = Object.values(matches).filter(e => e.isPublic && !e.started && Object.keys(e.players).length < e.maxPlayers);
        if (matchesAvailable.length > 0) //if there are available matches
            joinMatch(matchesAvailable[Math.floor(Math.random()*matchesAvailable.length)], socket);
        else
            socket.emit('noMatches');
    });

    socket.on('comeback', (num, code) => {
        if (!socket.ingame && Number.isInteger(num) && typeof code == 'string') {
            let match = matches[code];
            if (!match) return socket.emit('err', 'This match is no longer available to join.', 'Too late');
            let player = Object.values(match.players).find(p => p.num == num);
            if (!player || player.connected) return socket.emit('err', 'You can no longer join as this player.', 'Too late');
            match.players[socket.id] = player;
            delete match.players[player.socket.id];
            match.players[socket.id].socket = socket;
            match.players[socket.id].connected = true;
            socket.ingame = match.code;
            socket.join(match.code);

            let matchInfo = {
                players: match.playerInfo(),
                options: match.matchInfo().options,
                code: match.code,
                drawingNum: match.drawingNum,
                finished: match.finished,
            };

            if (match.presentPhase) {
                socket.emit('present', {
                    ...matchInfo,
                    num: num,
                    amHost: socket.id == match.host,
                    plots: match.plots,
                    presenting: match.presenting,
                    presentingImage: match.presentingImage,
                    host: match.players[match.host].num,
                }, match.rjCode);
            } else {
                let plot = match.plots.find(p => p.playerOrder[match.drawingNum] == num);

                socket.emit('matchStart', {
                    ...matchInfo,
                    theme: [0, 1].includes(match.drawingNum) ? plot.theme : plot.drawings.slice(plot.pos-1, plot.pos+1),
                    num: player.num,
                });
            }
        }
    });

    socket.on('rejoin', (rejoinCode, options) => {
        if (typeof rejoinCode == 'string') {
            let match = Object.values(matches).find(m => m.rejoinCode == rejoinCode);
            if (match != undefined) {
                socket.emit('rejoin', match.code);
            } else {
                if (optionsValid(options)) {
                    match = createMatch(null, options);
                    match.rejoinCode = rejoinCode;
                    socket.emit('rejoin', match.code);
                }
            }
        }
    });

    socket.on('createMatch', options => {
        if (optionsValid(options))
            createMatch(socket, options);
    });

    socket.on('updateOptions', newOptions => {
        if (socket.ingame && matches[socket.ingame].host == socket.id && !matches[socket.ingame].started && optionsValid({...newOptions, players: matches[socket.ingame].maxPlayers}))
            matches[socket.ingame].setOptions({
                ...newOptions,
                players: matches[socket.ingame].maxPlayers,
            });
    });

    socket.on('newRoomCode', () => {
        if (socket.ingame && matches[socket.ingame].host == socket.id && !matches[socket.ingame].started) {
            let match = matches[socket.ingame];
            let oldCode = match.code;
            let newCode = generateMatchCode();
            delete matches[oldCode];
            matches[newCode] = match;
            match.code = newCode;
            Object.keys(match.players).forEach(id => {
                let p = io.sockets.sockets.get(id);
                p.ingame = newCode;
                p.leave(oldCode);
                p.join(newCode);
            });
            match.matchUpdate();
        }
    });

    socket.on('kick', toKick => {
        if (socket.ingame)
            matches[socket.ingame].kick(toKick, socket.id);
    });

    socket.on('promote', toPromote => {
        if (socket.ingame)
            matches[socket.ingame].promote(toPromote, socket.id);
    });

    socket.on('startMatch', () => {
        if (socket.ingame)
            matches[socket.ingame].startStartTimer(socket.id);
    });

    socket.on('submit', drawing => {
        if (socket.ingame && typeof drawing == 'string' && drawing.startsWith(drawingPrefix) && drawing.length < 200000) {
            matches[socket.ingame].submit(socket.id, drawing);
        }
    });

    socket.on('presentNext', () => {
        if (socket.ingame && socket.id == matches[socket.ingame].host) {
            matches[socket.ingame].presentNext();
        }
    });

    socket.on('disconnect', () => {
        if (socket.ingame && matches[socket.ingame])
            matches[socket.ingame].leave(socket.id);
    });
});

function generateMatchCode() {
    let code;
    if (codeChars ** cfg.codeLength > Object.keys(matches).length)
        cfg.codeLength++;
    do {
        code = '';
        for (let i = 0; i < cfg.codeLength; i++)
            code += codeChars[Math.floor(Math.random()*codeChars.length)];
    } while (matches.hasOwnProperty(code))
    return code;
}

var matches = {};

module.exports = {
    io,
    matches
};

const Match = require('./Match');

console.log(`Server up, port ${cfg.port}`);