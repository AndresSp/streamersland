import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import CharacterPreview from './../components/CharacterPreview'
import CharacterThumbnail from '../components/CharacterThumbnail';
import LaunchIcon from '@material-ui/icons/Launch';
import { useSelector, useDispatch } from 'react-redux';
import { streamersSelector, selectedStreamersSelector, add, lastOneSelector, remove } from './../streamersSelectSlice';

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
    // boardContainer: {
    //     overflow: 'auto'
    // },
    container: {
        maxHeight: '325px',
        overflow: 'auto'
      }
    })
)

// const config = streamersConfig.streamers
// const streamers = Object.keys(streamersConfig.streamers).map((streamer) => ({
//     id: streamer,
//     name: config[streamer].name
// }))

export default function CharactersSelectionBoard() {
    // while(streamers.length < 24){
    //     streamers.push({id: streamers.length - 1, name: undefined})
    // }
    const dispatch = useDispatch();
    const streamers = useSelector(streamersSelector);
    const selectedStreamers = useSelector(selectedStreamersSelector)
    const lastOne = useSelector(lastOneSelector)
    const selectStreamer = (streamer) => dispatch(add(streamer))
    const deselectStreamer = (streamer) => dispatch(remove(streamer))
    const findIndexStreamer = (currentId) =>  selectedStreamers.findIndex((selected) => selected.id === currentId) + 1
    const onClickMultiTwitch = () => {
        const names = selectedStreamers.map(streamer => streamer.name)
        window.open(`https://multitwitch.tv/${names.join('/')}`, "_blank")
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
                <Grid container className={classes.boardContainer}  direction="row" justify="center" spacing={1} wrap="nowrap">
                    <Grid item sm={10} md={4}>
                        <CharacterPreview streamer={lastOne}/>
                    </Grid>
                    <Grid item sm={2} md={8}>
                        <Grid container  className={classes.container} spacing={1} direction="row" justify="flex-start">
                        {streamers.map((streamer) => (
                            <Grid item key={streamer.id}>
                                <CharacterThumbnail 
                                    streamer={streamer} 
                                    select={selectStreamer} 
                                    deselect={deselectStreamer} 
                                    selected={findIndexStreamer(streamer.id)}/>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item align="center">
                <Button variant="contained" color="primary" 
                 onClick={() => onClickMultiTwitch()}
                 disabled={!selectedStreamers.length} 
                 endIcon={<LaunchIcon/>}>
                    Ir a multitwitch
                </Button>
            </Grid>
        </Grid>
    )
}