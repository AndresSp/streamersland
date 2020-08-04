import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CharacterPreview from './../components/CharacterPreview'
import CharacterThumbnail from '../components/CharacterThumbnail';

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.contrastText,
        textShadow: `
                    2px 2px ${theme.palette.secondary.light}
                    4px 4px ${theme.palette.secondary.main}`
    },
    container: {
        maxHeight: '325px',
        overflow: 'auto'
      }
    })
)

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function CharactersSelectionBoard() {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" spacing={3}>
            <Grid item>
                <Typography variant="h3" align="center" className={classes.title}>Streamer Select</Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="flex-start" spacing={1} wrap="nowrap">
                    <Grid item>
                        <CharacterPreview/>
                    </Grid>
                    <Grid item>
                        <Grid container  className={classes.container} spacing={1} direction="row" justify="flex-start">
                        {cards.map((card) => (
                            <Grid item key={card}>
                                <CharacterThumbnail/>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}