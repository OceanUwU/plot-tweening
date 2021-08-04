import React from 'react';
import { ButtonGroup, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import playerColours from '../Match/playerColours.json';
import socket from '../socket';

const useStyles = makeStyles((theme) => ({
    colorButton: {
        margin: '3px 5px',
    },
}));

const rows = 4;
const columns = 4;

function ColorPicker(props) {
    const classes = useStyles();

    const [selected, setSelected] = React.useState(props.selected);
    const [taken, setTaken] = React.useState([]);

    React.useEffect(() => {
        socket.emit('changeColor', selected);
    });

    if (props.matchInfo != null) {
        React.useEffect(() => {
            let showTaken = matchInfo => {
                setTaken(matchInfo.players.map(p => p.num));
            };
            socket.on('matchUpdate', showTaken);
            showTaken(props.matchInfo);
            return () => socket.off('matchUpdate', showTaken);
        }, []);
    }

    return (
        <ButtonGroup orientation="vertical">
            {(() => {
                let buttonGroups = [];
                for (let i = 0; i < rows * columns; i+=rows) {
                    buttonGroups.push(<ButtonGroup>{(() => {
                        let buttons = [];
                        for (let k = i; k < i+rows; k++) {
                            buttons.push(
                                <Tooltip title={playerColours[k]}>
                                    <Button
                                        className={`${classes.colorButton} pfp`}
                                        style={{backgroundImage: `url(/pfps/${k}.png)`, opacity: selected == k ? 1 : (taken.includes(k) ? 0.2 : 0.5)}}
                                        onClick={() => {
                                            if (!taken.includes(k)) {
                                                localStorage.stcolor = String(k);
                                                setSelected(k);
                                            }
                                        }}
                                    />
                                </Tooltip>
                            );
                        }
                        return buttons;
                    })()}</ButtonGroup>);
                }
                return buttonGroups;
            })()}
        </ButtonGroup>
    );
}

export default ColorPicker;