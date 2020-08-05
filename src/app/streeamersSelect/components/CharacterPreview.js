import React from 'react';
import { makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import smashBg from './../../../assets/png/smashTemplate.png';

const useStyles = makeStyles({
      preview: {
        position: 'relative',
        display: 'flex',
        backgroundColor: '#67AB87',
        minWidth: '300px',
        height: '316px',
        borderRadius: '3px',
        padding: '4px'
      },
      imgPreview: {
        width: '300px',
        height: 'auto',
        borderRadius: '3px',
        margin: 'auto'
      },
      smashTemplate: {
          position: 'absolute',
          width: '225px',
          height: 'auto',
          bottom: '0',
          right: '0'
      },
      smashTemplateFlipped: {
          position: 'absolute',
          width: '125px',
          height: 'auto',
          bottom: '0',
          left: '0',
          transform: 'scaleX(-1)',
          filter: 'invert(1)'
      },
      name: {
        position: 'absolute',
        color:'white',
        textShadow: props => `1px 1px ${props.streamer ? props.streamer.color: 'red'}, 
                              2px 2px ${props.streamer ? props.streamer.color: 'red'}, 
                              3px 3px ${props.streamer ? props.streamer.color: 'red'}`,
        bottom: '64px',
        right: '20px',
        zIndex: 2,
        filter: 'drop-shadow(2px 4px 6px black)',
       '&:hover': {
        textShadow: props => `1px 1px ${props.streamer ? props.streamer.color: 'red'}, 
                              2px 2px ${props.streamer ? props.streamer.color: 'red'}, 
                              3px 3px ${props.streamer ? props.streamer.color: 'red'}, 
                              4px 4px ${props.streamer ? props.streamer.color: 'red'}, 
                              5px 5px ${props.streamer ? props.streamer.color: 'red'}, 
                              6px 6px ${props.streamer ? props.streamer.color: 'red'}`
        }
      },
      description: {
        position: 'absolute',
        color:props => `${props.streamer ? props.streamer.color: 'red'}`,
        textShadow: `-1px 1px black, 
                     -2px 2px black, 
                     -3px 3px black`,
        bottom: '35px',
        left: '20px',
        zIndex: 1,
        filter: 'drop-shadow(2px 4px 6px black)',
       '&:hover': {
        textShadow: `-1px 1px black, 
                     -2px 2px black, 
                     -3px 3px black, 
                     -4px 4px black, 
                     -5px 5px black, 
                     -6px 6px black;`
       }
      }
  } 
)

export default function CharacterPreview(props) {
    const classes = useStyles(props);
    const {streamer} = props;

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={classes.preview}>
            {streamer ? <img className={classes.imgPreview} src={`${process.env.PUBLIC_URL}/streamers/${streamer.id}.png`}></img>: ''}
            <div>
                {streamer  ? <Typography variant="h3" align="center" className={classes.name}>{streamer.name}</Typography>: 'Not selected'}
                <img className={classes.smashTemplate} src={smashBg}></img>
                {streamer ? <Typography variant="h4" align="center" className={classes.description}>{streamer.description}</Typography>: ''}
                {streamer ? <img className={classes.smashTemplateFlipped} src={smashBg}></img>: ''}
            </div>
        </div>
    )
}