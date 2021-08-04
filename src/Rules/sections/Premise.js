import React from 'react';
import { Typography, Link } from '@material-ui/core';

function Premise() {
    let videoID = 'ScMzIvxBSi4';
    return (
        <div>
            <img src="/icon.png" style={{maxWidth: '100%', width: 300}} />
            <Typography>In PlotTweening, you connect a beginning and ending which only share a vague theme.</Typography>
            <br />
            <Typography variant="h5">Video</Typography>
            <Typography>Here's <Link href={`https://youtu.be/${videoID}`} target="_blank" rel="noopener">a YouTube video</Link> showing the game in action.</Typography>
            <iframe style={{width: '100%', height: '250px'}} src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};

export default Premise;