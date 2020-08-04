import React from 'react';

import {Button, Card, CardActions, CardContent, CardMedia, 
  CssBaseline, Grid, Typography, makeStyles, Container, Link, SvgIcon, useTheme, useMediaQuery} from '@material-ui/core';
import { ReactComponent as StreamerslandLogo } from './../../../assets/svg/streamersland.svg';
import mcwp from './../../../assets/jpg/mcwp.jpg';
import CharactersSelectionBoard from '../../playersSelect/containers/CharactersSelectionBoard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        AndresSp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  brand: {
    width: '100%',
    height: 'auto',
    marginTop: '25vh'
  },
  title: {
    position: 'absolute',
    width: '100%',
    height: 'auto'
  },
  heroContent: {
    backgroundImage: `url(${mcwp})`,
    minHeight: '100vh',
    color: 'white'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  main: {
    backgroundColor: theme.palette.secondary.dark
  },
  mainContainer: {
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
              <SvgIcon className={classes.brand} viewBox="0 0 24 12">
                <StreamerslandLogo/>
              </SvgIcon>
            <Typography variant="h5" align="center" paragraph>
              ¡Todas las comunidades en una sola!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Conócelos
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="contained" color="secondary">
                    En línea
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.mainContainer}>
          {/* End hero unit */}
          <CharactersSelectionBoard/>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          STREAMERSLAND
        </Typography>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}