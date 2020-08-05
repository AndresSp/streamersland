import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import smashBg from './../../../assets/png/smashTemplate.png';

const useStyles = makeStyles((theme) => ({
      preview: {
        position: 'relative',
        backgroundColor: '#67AB87',
        width: '300px',
        height: '316px',
        borderRadius: '3px',
        padding: '4px'
      },
      details: {
        width: '100%',
        height: 'auto',
        borderRadius: '3px'
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
        textShadow: `1px 1px #fe4902, 
                     2px 2px #fe4902, 
                     3px 3px #fe4902`,
        bottom: '64px',
        right: '20px',
        zIndex: 2,
       '&:hover': {
        textShadow: `1px 1px #fe4902, 
                     2px 2px #fe4902, 
                     3px 3px #fe4902, 
                     4px 4px #fe4902, 
                     5px 5px #fe4902, 
                     6px 6px #fe4902;`
        }
      },
      description: {
        position: 'absolute',
        color:'black',
        textShadow: `-1px 1px #fe4902, 
                     -2px 2px #fe4902, 
                     -3px 3px #fe4902`,
        bottom: '35px',
        left: '20px',
        zIndex: 1,
       '&:hover': {
        textShadow: `-1px 1px #fe4902, 
                     -2px 2px #fe4902, 
                     -3px 3px #fe4902, 
                     -4px 4px #fe4902, 
                     -5px 5px #fe4902, 
                     -6px 6px #fe4902;`
        }
      }


    })
)

export default function CharacterPreview() {
    const classes = useStyles();
    return (
        <div className={classes.preview}>
            <img className={classes.details} src={`${process.env.PUBLIC_URL}/streamers/${174621142}.png`}></img>
            <div>
                <Typography variant="h3" align="center" className={classes.name}>yokolat3</Typography>
                <img className={classes.smashTemplate} src={smashBg}></img>
                <Typography variant="h4" align="center" className={classes.description}>Arte</Typography>
                <img className={classes.smashTemplateFlipped} src={smashBg}></img>
            </div>
        </div>
    )
}