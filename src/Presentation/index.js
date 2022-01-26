import React from 'react';
import { Typography, Tooltip, IconButton, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import socket from '../socket/';
import playerColours from '../Match/playerColours.json';
import showDialog from '../Dialog/show';
import rules from '../Rules';
import StarsIcon from '@material-ui/icons/Stars';
import showMatchOptions from '../Home/showMatchOptions';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import createGif from './gifCreator.js';
//import { gameNameChars } from '../Match/gameplay';

const wins = {
    'treasure': [true, 'The pirates found all the treasure they needed!'],
    'kill': [true, 'The pirates found and killed a sea monster!'],
    'sink': [false, 'The ship sank.'],
    'snitch': [false, 'The Sea Master found the biologist and snitched on them.'],
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',

        '& > table': {
            width: '95vw',
            height: '85vh',
            border: '1px solid #0000001f',
            borderRadius: 10,
            background: '#ffffff66',

            '& > thead > td': {
                textAlign: 'center',
            },

            '& > tbody > tr > td': {
                background: '#ffffff66',
                border: '1px solid #0000001f',
                borderRadius: 8,
                height: '70vh',
                '& > div': {
                    height: '100%',
                    overflowY: 'auto',
                }
            },
        }
    },

    players: {
        width: 180,
        maxWidth: 180,
        '& > div': {
            '& > div': {
                width: '95%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 8,
                padding: '4px 8px',
                '& > span': {
                    display: 'flex',
                    alignItems: 'center',
                }
            }
        }
    },

    plot: {
        overflowAnchor: 'none',

        '& > .anchor': {
            overflowAnchor: 'auto',
            height: 1,
        },
    },

    plotPoint: {
        marginTop: 30,
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            '& > img': {
                marginRight: 8
            },
            '& > span': {
                fontSize: 20,
            },
        },
        '& > img': {
            maxWidth: '100%',
            maxHeight: '60vh',
        },
    },
});

function Presentation(props) {
    const classes = useStyles();

    let [presenting, setPresenting] = React.useState(props.matchInfo.presenting);
    let [drawing, setDrawing] = React.useState(props.matchInfo.presentingImage);
    let plotDiv = React.createRef();
    
    React.useEffect(() => {
        (new Audio('/endMatch.mp3')).play();

        socket.on('presentNewPlot', () => {
            setPresenting(presenting+1);
            presenting++;
            setDrawing(0);
            drawing = 0;
        });
        socket.on('presentNewDrawing', () => {
            setDrawing(drawing+1);
            drawing++;
        });

        return () => {
            socket.off('presentNewPlot');
            socket.off('presentNewDrawing');
        };
    }, []);

    React.useEffect(() => {
        plotDiv.current.scrollTop = plotDiv.current.scrollHeight;
    }, [drawing]);
    

    return (
        <div className={classes.root}>
            <div style={{display: 'flex'}}>
                <IconButton onClick={() => showMatchOptions.showMatchOptions({editable: false, started: true, ingame: true, options: props.matchInfo.options})}>
                    <SettingsIcon />
                </IconButton>
                <IconButton href="/">
                    <HomeIcon />
                </IconButton>
                <IconButton onClick={() => showDialog({
                    title: "Room Code",
                    description: "Players can use this code to rejoin the match if they get disconnected:",
                }, <Typography variant="h2">{props.matchInfo.code}</Typography>)}><CodeIcon /></IconButton>
                <rules.ShowRulesButton />
            </div>

            <table>
                <thead>
                    <td><Typography variant="h4">Players</Typography></td>
                    <td><Typography variant="h4">{props.matchInfo.players.find(p => p.num == props.matchInfo.plots[presenting].owner).name}'s plot</Typography></td>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.players}><div>{props.matchInfo.plots.map((plot, index) => {
                            let player = props.matchInfo.players.find(p => p.num == plot.owner);

                            return (
                                <div style={{background: index == presenting ? '#66f542': '#e3e3e3'}}>
                                    <img className="pfp" src={`/pfps/${player.num}.png`} />
                                    <span style={{textDecoration: props.matchInfo.num == player.num ? 'underline' : 'none'}}>
                                        {player.name}
                                        {props.matchInfo.host == player.num ? <Tooltip title="This player is the host. They control when images are shown."><StarsIcon /></Tooltip> : null}
                                    </span>
                                </div>
                            );
                        })}</div></td>


                        <td><div className={classes.plot} ref={plotDiv}>
                            <Typography>The theme was: <b>{props.matchInfo.plots[presenting].theme}</b></Typography>

                            {props.matchInfo.plots[presenting].drawings.slice(0, drawing).map((drawing, index) => {
                                let player = props.matchInfo.players.find(p => p.num == props.matchInfo.plots[presenting].drawers[index]);

                                return (
                                    <div className={classes.plotPoint}>
                                        <div>
                                            <img className="pfp" src={`/pfps/${player.num}.png`} />
                                            <span style={{textDecoration: props.matchInfo.num == player.num ? 'underline' : 'none'}}>{player.name}</span>
                                        </div>
                                        <img src={drawing} />
                                    </div>
                                );
                            })}

                            {drawing == props.matchInfo.plots[presenting].drawings.length ? (
                                <div style={{textAlign: 'center'}}>
                                    <Divider />
                                    <Typography>End of plot</Typography>
                                    <Button color="secondary" onClick={() => createGif([props.matchInfo.plots[presenting]], props.matchInfo.players)}>Download as gif</Button>
                                    {presenting == props.matchInfo.plots.length-1 ? [<br />,<Button color="secondary" onClick={() => createGif(props.matchInfo.plots, props.matchInfo.players)}>Download all as one long gif</Button>] : null}
                                </div>
                            ) : null}

                            {drawing == props.matchInfo.plots[presenting].drawings.length && presenting == props.matchInfo.plots.length-1 ? <Button color="primary" size="large" onClick={() => socket.emit('rejoin', props.rjCode, props.matchInfo.options)}>Play again</Button> : (
                                props.matchInfo.amHost ? <Button color="primary" onClick={() => socket.emit('presentNext')} size="large">Next</Button> : null
                            )}
                        </div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Presentation;