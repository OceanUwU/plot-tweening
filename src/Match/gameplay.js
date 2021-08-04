import React from 'react';
import ReactDOM from 'react-dom';
import theme from '../theme';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Match from './';
import Presentation from '../Presentation';

function playMatch(matchInfo, myId) {
    ReactDOM.render(<ThemeProvider theme={theme}><CssBaseline /><Match matchInfo={matchInfo} players={matchInfo.players} myId={myId} /></ThemeProvider>, document.getElementById('root'), () => {        
        (new Audio('/startMatch.mp3')).play();
    });
}

function present(matchInfo, rjCode) {
    ReactDOM.render(<ThemeProvider theme={theme}><CssBaseline /><Presentation matchInfo={matchInfo} rjCode={rjCode} /></ThemeProvider>, document.getElementById('root'));

    matchInfo = null;
}

export {
    playMatch,

    present,
};