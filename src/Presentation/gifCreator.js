import GIF from "gif.js";

const width = 539;
const height = 369;
const delay = 2500;

function themeFrame(theme) {
    return new Promise(async res => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'black';
        ctx.font = '38px Arial';
        ctx.fillText(`Plot theme: ${theme}`, width/2, height/2);
        res(ctx);
        //window.location.host
    });
}

function drawingFrame(drawing, player) {
    return new Promise(async res => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        let drawingImg = new Image();
        drawingImg.onload = () => {
            let newWidth = height * (drawingImg.width / drawingImg.height)
            ctx.drawImage(drawingImg, 0, 0, newWidth, height);

            let pfp = new Image();

            pfp.onload = () => {
                //write name
                ctx.fillStyle = 'black';
                ctx.strokeStyle = 'white';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'left';
                ctx.font = '30px Arial';
                ctx.fillText(player.name, 5+50+5, 5+(50/2));
                ctx.strokeText(player.name, 5+50+5, 5+(50/2));
    
                ctx.save();
    
                //border around pfp
                ctx.beginPath();
                ctx.arc(25+5, 25+5, 25+1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                ctx.fillStyle = '#0000003b';
                ctx.fillRect(0, 0, width, height);
                ctx.restore();
    
                //draw pfp as circle
                ctx.beginPath();
                ctx.arc(25+5, 25+5, 25, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(pfp, 5, 5, 50, 50);
                ctx.restore();
    
                res(ctx);
            };
            pfp.onerror = () => res(ctx);
            pfp.src = `/pfps/${player.num}.png`;
        };
        drawingImg.onerror = () => res(ctx);
        drawingImg.src = drawing;
    });
}

async function createGif(plot, players) {
    let frames = await Promise.all([
        themeFrame(plot.theme),
        ...plot.drawings.map((drawing, index) => drawingFrame(drawing, players.find(p => p.num == plot.drawers[index])))
    ]);

    let gif = new GIF({
        width,
        height,
    });
    frames.forEach(frame => gif.addFrame(frame, {delay, copy: true}));

    gif.on('finished', blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `PlotTweening-${Date.now()}.gif`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });

    gif.render();
}

export default createGif;