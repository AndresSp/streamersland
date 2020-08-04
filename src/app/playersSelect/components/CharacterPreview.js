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
    }

    })
)

export default function CharacterPreview() {
    const classes = useStyles();
    return (
        <div className={classes.preview}>
            <img className={classes.details} src="https://static-cdn.jtvnw.net/jtv_user_pictures/92bd98c3-f335-41aa-880d-facaf17533c5-profile_image-300x300.png"></img>
            <div>
                <Typography variant="h3" align="center" className={classes.name}>Flaiveth</Typography>
                <img className={classes.smashTemplate} src={smashBg}></img>
            </div>
        </div>
    )
}