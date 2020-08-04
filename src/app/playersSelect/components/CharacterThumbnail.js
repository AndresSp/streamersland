import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardTest: {
        backgroundColor: theme.palette.secondary.light,
        width: '100px',
        height: '100px',
        borderRadius: '3px',
        padding: '4px',
        '&:hover' : {
        }
      },
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: '3px',
        '&:hover' : {
            outline: '4px solid white'
        }
    }
    })
)

export default function CharacterThumbnail() {
    const classes = useStyles();
    
    return (
        <div className={classes.cardTest}>
            <img className={classes.thumbnail} src="https://static-cdn.jtvnw.net/jtv_user_pictures/c57423a9-2465-4455-becb-8cd9abc7dd1f-profile_image-300x300.png"></img>
        </div>
    )
}