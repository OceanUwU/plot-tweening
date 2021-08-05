import React from 'react';
import { Typography, Divider, Tooltip, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import showMatchOptions from '../Home/showMatchOptions';
import showDialog from '../Dialog/show';
import rules from '../Rules';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import socket from '../socket';

const controllerHeight = '30vh';
const useStyles = makeStyles({
    gameInfo: {
        display: 'flex',
        width: '100%',
        height: 83,
        //marginBottom: 20,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        backgroundColor: '#50e662',
        borderBottom: '1px solid #0000001f',
        zIndex: 1005,
        '& div': {
            flexGrow: 1,
        },
    },

    gameInfoTitle: {
        textAlign: 'center',
    },

    gameInfoContent: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        /*textAlign: 'center',
        '& *': {
            display: 'inline',
        },*/
    },

    buttons: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        opacity: 1,
        width: 48,
        zIndex: 5,
    },

    do: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    literallyCanvas: {
        width: 600,
        maxWidth: '100%',
    },

    image: {
        width: 600,
        maxWidth: '100%',
        padding: '8px 0',
    },

    playingStatusContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            padding: '4px 8px',
            border: '1px solid #0000001f',
            '& > span': {
                fontSize: 24,
                paddingLeft: 5,
            },
        }
    },
});

function getImg(paper) {
	return new Promise((res, rej) => {
		let paperCanvas = paper.canvasForExport();
		let canvas = document.createElement('canvas')
        canvas.width = paperCanvas.width;
        canvas.height = paperCanvas.height;
		let ctx = canvas.getContext('2d');
		ctx.fillStyle = '#ddd';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = document.getElementsByClassName('lc-drawing')[0].style['background-color'];
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		let img = new Image();
		img.onload = () => {
			ctx.drawImage(img, 0, 0);
			res(canvas.toDataURL('image/jpeg', 0.5));
		};
		img.src = paperCanvas.toDataURL();
		//ctx.putImageData(paperCanvas.getContext('2d').getImageData(0, 0, paperCanvas.width, paperCanvas.height), 0, 0);
	});
}

function Match(props) {
    const classes = useStyles();
    let selfPlayer = props.players.find(player => props.myId.startsWith(player.id));

    let [drawingNum, setDrawingNum] = React.useState(props.matchInfo.drawingNum);
    let [playingStatus, setPlayingStatus] = React.useState(props.matchInfo.finished);
    let [canvas, setCanvas] = React.useState(null);
    let [drawInfo, setDrawInfo] = React.useState(props.matchInfo.theme);
    let [submittable, setSubmittable] = React.useState(true);
    let resetCanvas = () => setCanvas(LC.init(document.getElementById('drawingArea'), {imageURLPrefix: '/literallycanvas-0.4.13/img', backgroundColor: 'white', tools: [
        LC.tools.Pencil,
        LC.tools.Eraser,
        LC.tools.Line,
        LC.tools.Rectangle,
        LC.tools.Ellipse,
        LC.tools.Polygon,
        LC.tools.Pan,
        LC.tools.Eyedropper
    ]}));

    React.useEffect(() => {
        resetCanvas();
        socket.on('wait', newPlayingStatus => setPlayingStatus(newPlayingStatus));
        socket.on('newDrawing', info => {
            setDrawInfo(info);
            setDrawingNum(drawingNum+1);
            drawingNum++;
            resetCanvas();
            setSubmittable(false);
            setTimeout(() => setSubmittable(true), 7500);
        });

        return () => {
            socket.off('wait');
            socket.off('newDrawing');
        };
    }, []);

    return (
        <div>
            <div className={classes.gameInfo}>
                <Tooltip title="How many players have finished drawing this turn">
                    <div>
                        <div className={classes.gameInfoTitle}>
                            <Typography variant="subtitle1">
                                Players done
                            </Typography>
                        </div>
                        <div className={classes.gameInfoContent}>
                            <Typography variant="h3">
                                <span id="treasuresFound">{playingStatus.length}</span>
                            </Typography>
                            <Typography variant="h5">
                                /<span id="treasuresNeeded">{props.players.length}</span>
                            </Typography>
                        </div>
                    </div>
                </Tooltip>

                <Tooltip title="Turn number">
                    <div>
                        <div className={classes.gameInfoTitle}>
                            <Typography variant="subtitle1">
                                Drawing #
                            </Typography>
                        </div>
                        <div className={classes.gameInfoContent}>
                            <Typography variant="h4">
                                <span id="drawingNum">{drawingNum+1}</span>
                            </Typography>
                            <Typography variant="h6">
                                /<span id="totalDrawings">{props.players.length}</span>
                            </Typography>
                        </div>
                    </div>
                </Tooltip>
            </div>

            <div className={classes.buttons}>
                <rules.ShowRulesButton />
                <IconButton onClick={() => showMatchOptions.showMatchOptions({editable: false, started: true, ingame: true, options: props.matchInfo.options})}><SettingsIcon /></IconButton>
                <IconButton onClick={() => showDialog({
                    title: "Room Code",
                    description: "Players can use this code to rejoin the match if they get disconnected:",
                }, <Typography variant="h2">{props.matchInfo.code}</Typography>)}><CodeIcon /></IconButton>
            </div>

            <div className={classes.do} style={{display: playingStatus.includes(props.matchInfo.num) ? 'none' : 'flex'}}>
                {Array.isArray(drawInfo)
                ?
                <Typography>Draw what happens inbetween these two pictures.</Typography>
                :
                <Typography>Draw the <b>{drawingNum == 0 ? 'beginning' : 'ending'}</b> of a story with the following theme: <b>{drawInfo}</b>.</Typography>}

                {Array.isArray(drawInfo) ? <img src={drawInfo[0]} className={classes.image} /> : null}
                <div id="drawingArea" className={classes.literallyCanvas} />
                {Array.isArray(drawInfo) ? <img src={drawInfo[1]} className={classes.image} /> : null}
                
                <Button size="large" color={submittable ? 'primary' : 'default'} disabled={!submittable} style={{marginTop: 10}} onClick={async () => {setSubmittable(false);setTimeout(() => setSubmittable(true), 2500);socket.emit('submit', await getImg(canvas))}}>Submit</Button>
                
                <Divider style={{marginTop: 10, marginBottom: 10, width: '100%'}} />
            </div>


            <div className={classes.playingStatusContainer}>
                {props.players.map(player => <div style={{background: playingStatus.includes(player.num) ? '#73ff7c' : '#ff6b61'}}>
                    <img className="pfp" src={`/pfps/${player.num}.png`} />
                    <span style={{textDecoration: `${player.dead ? 'line-through' : ''}${socket.id.startsWith(player.id) ? ' underline' : ''}`}}>{player.name}</span>
                </div>)}
            </div>
        </div>
    );
}

export default Match;