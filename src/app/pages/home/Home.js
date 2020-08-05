import React from 'react';

import {Button, Card, CardActions, CardContent, CardMedia, 
  CssBaseline, Grid, Typography, makeStyles, Container, Link, SvgIcon, useTheme, useMediaQuery, withStyles} from '@material-ui/core';
import { ReactComponent as StreamerslandLogo } from './../../../assets/svg/streamersland.svg';
import mcwp from './../../../assets/jpg/mcwp.jpg';
import mapleCursorSvg from './../../../assets/svg/maple_cursor.svg';
import mapleCursorCur from './../../../assets/svg/maple_cursor.cur';
import CharactersSelectionBoard from '../../streeamersSelect/containers/CharactersSelectionBoard';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import ReactAudioPlayer from 'react-audio-player';
import menuTheme from './../../../assets/mp3/menu.mp3';
import { auth } from './../../api/twitch';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/AndresSp/">
        AndresSp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
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
  section2 : {
    cursor: `url(${mapleCursorSvg}), url(${mapleCursorCur}), auto;`
  },
  audioPlayer: {
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    height: '20px',
    width: '100%',
    filter: 'opacity(0.5)',
    '&:hover': {
      filter: 'opacity(0.8)'
    }
  },
  mainContainer: {
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    overflow: 'auto'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

export class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
    if(window.pageYOffset < 200){
      animateScroll.scrollTo(64, {
        smooth: true,
        duration: 1000,
        smooth: 'easeInOutCubic'
      })
    }
  }

  componentWillUnmount() {
  }


  render() {
    const { classes } = this.props;
    return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        {/* Hero unit */}
        <section id="section1" className={classes.heroContent}>
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
                  <ScrollLink
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  duration= {500}>
                    <Button variant="contained" color="primary">
                      Conócelos
                    </Button>
                  </ScrollLink>
                </Grid>
                {/* <Grid item>
                  <Button variant="contained" color="secondary">
                    En línea
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </section>
        <section id="section2" className={classes.section2}>
        <ReactAudioPlayer id="audioPlayer" className={classes.audioPlayer} src={menuTheme} loop volume={0.15} controls />
          <Container className={classes.mainContainer}>
            {/* End hero unit */}
            <CharactersSelectionBoard/>
          </Container>
        </section>
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
    </React.Fragment>)
  }
}

export default withStyles(styles, { withTheme: true })(Home);