import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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
    },
    anon: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: '#67AB87',
        height: '100%',
        textShadow: `
                    2px 2px ${theme.palette.secondary.light},
                    4px 4px ${theme.palette.secondary.main}`
    }
    })
)

export default function CharacterThumbnail(props) {
    const classes = useStyles();
    const {id, name} = props;
    const imgSrc = name ? `${process.env.PUBLIC_URL}/streamers/${id}.png` : undefined

    return (
        <div className={classes.cardTest}>
            { imgSrc ? 
                <img className={classes.thumbnail} src={imgSrc}></img> :  
                <Typography variant="h2" align="center" className={classes.anon}>?</Typography> 
            }
        </div>
    )
}