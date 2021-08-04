import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 125,
        marginRight: 5,
    },
}));

function Options() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4">Options</Typography>
            <Typography>i havent made any options yet</Typography>
        </div>
    );
};

export default Options;