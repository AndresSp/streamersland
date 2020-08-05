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

export default function CharacterThumbnail(props) {
    const classes = useStyles();
    const {id, name} = props;
    const imgSrc = `${process.env.PUBLIC_URL}/streamers/${id}.png`

    return (
        <div className={classes.cardTest}>
            <img className={classes.thumbnail} src={imgSrc}></img>
        </div>
    )
}