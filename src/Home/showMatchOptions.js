import React from 'react';
import { Typography, Divider, FormControl, Select, MenuItem, InputLabel, FormLabel, Slider, Tooltip, IconButton, TextField, Grid, Switch, Button, ButtonGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import LockIcon from '@material-ui/icons/Lock';
import LinkIcon from '@material-ui/icons/Link';
import showDialog from '../Dialog/show';
import PresetMenu from './PresetMenu';
import socket from '../socket';
import defaultMatchOptions from './defaultMatchOptions.json';
import { TextFieldsOutlined } from '@material-ui/icons';
const allowedPlayers = [3, 15];

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    select: {
        width: 200,
    },
    smallSelect: {
        width: 50,
    },
}));

let optionsToLoad = false;
if (localStorage.stpresets && localStorage.stpreset) {
    let preset = JSON.parse(localStorage.stpresets).find(preset => preset.id == localStorage.stpreset);
    if (preset)
        optionsToLoad = preset.options;
}

var options = {
    ...defaultMatchOptions,
    ...optionsToLoad ? optionsToLoad : {},
};

for (let i in options) {
    if (typeof options[i] == 'object' && !Array.isArray(options[i]))
        options[i] = {
            ...localStorage.MatchOptions ? JSON.parse(localStorage.MatchOptions)[i] : {},
            ...options[i]
        }
}

function NumberTweaker(props) {
    return (
        <ButtonGroup size="small">
            {props.bigChange ? <Button onClick={() => props.fn(-10)} disabled={props.disabled || props.state == props.min}>- -</Button> : null}
            <Button onClick={() => props.fn(-1)} disabled={props.disabled || props.state == props.min}>-</Button>
            <Button disabled>{props.state}</Button>
            <Button onClick={() => props.fn(+1)} disabled={props.disabled || props.state == props.max}>+</Button>
            {props.bigChange ? <Button onClick={() => props.fn(+10)} disabled={props.disabled || props.state == props.max}>++</Button> : null}
        </ButtonGroup>
    );
}

function MatchOptions(props) {
    const classes = useStyles();

    if (props.options)
        options = props.options;

    const sendUpdate = () => {
        if (props.editable && props.started)
            socket.emit('updateOptions', options);
    }
    const [publicity, setPublicity] = React.useState(options.public);
    const handlePublicityChange = event => {
        options.public = !publicity;
        setPublicity(!publicity);
        sendUpdate();
    };
    const [players, setPlayers] = React.useState(options.players);
    const changePlayers = change => {
        options.players += change;
        if (options.players < allowedPlayers[0]) options.players = allowedPlayers[0];
        if (options.players > allowedPlayers[1]) options.players = allowedPlayers[1];
        setPlayers(options.players);
        sendUpdate();
    };
    
    let updateOptions = () => {
        setPublicity(options.public);
        setPlayers(options.players);
    };
    React.useEffect(() => {
        sendUpdate();
        window.addEventListener('matchOptionsChanged', updateOptions);
        return () => window.removeEventListener('matchOptionsChanged', updateOptions);
    }, []);

    return (
        <div>
            <Button color="secondary" onClick={async () => {
                dialog = await showDialog({
                    title: 'Option presets',
                    buttonText: 'Back',
                    buttonAction: () => showMatchOptions(props),
                }, <PresetMenu {...props} showMatchOptions={showMatchOptions} options={options} />);
            }}>Presets</Button>
            <Divider style={{marginTop: 16}} />

            <FormControl className={classes.formControl}>
                <FormLabel>Privacy</FormLabel>
                <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item><LockIcon /></Grid>
                        <Grid item>
                            <Switch color="primary" checked={publicity} onChange={handlePublicityChange} disabled={!props.editable} />
                        </Grid>
                        <Grid item><PublicIcon /></Grid>
                    </Grid>
                </Typography>

                {props.started ? <Button color={props.editable ? 'primary' : 'disabled'} size="small" onClick={() => socket.emit('newRoomCode')} disabled={!props.editable}>New room code</Button> : null}
            </FormControl>

            <Divider />
            
            <FormControl className={classes.formControl}>
                <FormLabel style={{marginBottom: 5}}>Max players</FormLabel>
                <NumberTweaker fn={changePlayers} min={allowedPlayers[0]} max={allowedPlayers[1]} state={players} disabled={props.started} bigChange />
            </FormControl>
        </div>
    );
}

function changeOptions(newOptions) {
    options = newOptions;
    window.dispatchEvent(new Event('matchOptionsChanged'));
}

function hostChanged(amNowHost) {
    if (dialog.state.open && dialog.editable != amNowHost)
        showMatchOptions({editable: amNowHost, started: true});
}

var dialog = {
    state: {
        open: false,
    }
};

async function showMatchOptions(props) {
    let elem;

    dialog = await showDialog({
        ...(props.started ? {
            title: 'Match options',
            description: `Current options${props.ingame ? '' : ' (editable by the host)'}:`,
        } : {
            title: 'Create Match',
            description: 'Match options:',
            buttonText: 'Create',
            buttonAction: () => {
                dialog.handleClose();
                socket.emit('createMatch', options);
            }
        }),
    }, <MatchOptions {...props} />);
    dialog.editable = props.editable;
}

/*function PresetLoader(props) {
    let [enteredOptions, setEnteredOptions] = React.useState('');
    let copyHelp = 'Copy the options code for your currently chosen match options.';
    let [copyTitle, setCopyTitle] = React.useState(copyHelp);

    return (<div>
        <TextField
            label="Options code"
            defaultValue=""
            value={enteredOptions}
            onChange={e => setEnteredOptions(e.target.value)}
            helperText="Paste your options code here and click Load to load it"
            variant="outlined"
            disabled={!props.editable}
        />
        <Button color={props.editable ? 'primary' : 'default'} disabled={!props.editable} onClick={() => {
            try {
                options = {...options, ...JSON.parse(atob(enteredOptions))};
                showMatchOptions(props);
            } catch(e) {
                alert(e);
            }
        }}>Load</Button>

        <Divider />
        <Tooltip title={copyTitle}>
            <IconButton onClick={() => {
                copy(btoa(JSON.stringify(options)));
                setCopyTitle('Copied to clipboard!');
                setTimeout(() => {
                    setCopyTitle(copyHelp);
                }, 3000);
            }}><LinkIcon /></IconButton>
        </Tooltip>
    </div>);
}

async function presetLoader(props) {
    dialog = await showDialog({
        title: 'Preset loader/saver',
        buttonText: 'Match options',
        buttonAction: () => showMatchOptions(props),
    }, <PresetLoader {...props} />);
}*/

export default {
    showMatchOptions,
    changeOptions,
    hostChanged,
};