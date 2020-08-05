import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
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
    imgContainer: {
        position: 'relative'
    },
    playerTitle: {
        position: 'absolute',
        color: 'rgba(227, 35, 30, 0.75)',
        left: '40px',
        top: 0,
        zIndex: 5

    },
    playerDescription: {
        position: 'absolute',
        backgroundColor: 'rgba(227, 35, 30, 0.75)',
        width: '100%',
        bottom: '5px',
        color: theme.palette.secondary.contrastText
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
        <div className={classes.container}>
            <Typography variant="h5" className={classes.playerTitle}>1P</Typography>
            { imgSrc ? 
            <div className={classes.imgContainer}>
                <img className={classes.thumbnail} src={imgSrc}></img>
                <div className={classes.playerDescription}>
                    <Typography variant="subtitle1" align="center">{name}</Typography>
                </div>
            </div>
                     :  
                <Typography variant="h2" align="center" className={classes.anon}>?</Typography> 
            }
        </div>
    )
}