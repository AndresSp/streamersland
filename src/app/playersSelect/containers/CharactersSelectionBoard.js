import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import CharacterPreview from './../components/CharacterPreview'
import CharacterThumbnail from '../components/CharacterThumbnail';
import streamersConfig from '../../../assets/json/streamers.json';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.contrastText,
        textShadow: `
                    2px 2px ${theme.palette.secondary.light},
                    4px 4px ${theme.palette.secondary.main}`
    },
    subtitle: {
        color: theme.palette.secondary.contrastText
    },
    container: {
        maxHeight: '325px',
        overflow: 'auto'
      }
    })
)

const config = streamersConfig.streamers
const streamers = Object.keys(streamersConfig.streamers).map((streamer) => ({
    id: streamer,
    name: config[streamer].name
}))

export default function CharactersSelectionBoard() {
    while(streamers.length < 24){
        streamers.push({id: streamers.length - 1, name: undefined})
    }
    
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" spacing={3}>
            <Grid item>
                <Typography variant="h3" align="center" className={classes.title}>Streamer Select</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" align="center" paragraph className={classes.subtitle}>Selecciona tus streamers favoritos colaborando en el mejor servidor de minecraft de habla hispana</Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="flex-start" spacing={1} wrap="nowrap">
                    <Grid item>
                        <CharacterPreview/>
                    </Grid>
                    <Grid item>
                        <Grid container  className={classes.container} spacing={1} direction="row" justify="flex-start">
                        {streamers.map((streamer) => (
                            <Grid item key={streamer.id}>
                                <CharacterThumbnail id={streamer.id} name={streamer.name}/>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item align="center">
                <Button variant="contained" color="primary" endIcon={<LaunchIcon/>}>
                    Ir a multitwitch
                </Button>
            </Grid>
        </Grid>
    )
}