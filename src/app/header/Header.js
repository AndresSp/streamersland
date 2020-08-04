import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, SvgIcon } from '@material-ui/core';
import { ReactComponent as Cube } from './../../assets/svg/cube.svg';

const useStyles = makeStyles({

  toolbar: {
    padding: '0 30px',
    '& a': {
      margin: '0 5px'
    }
  },
  logo : {
    marginRight: '10px'
  }
});

const Header = (props) => {
  const classes = useStyles();
  return (
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <SvgIcon id="logo" className={classes.logo}>
            <Cube/>
          </SvgIcon>
          <Typography variant="h6" color="inherit" noWrap>
            STREAMERSLAND
          </Typography>
          { props.children }
        </Toolbar>
      </AppBar>
  );
}

export default Header;