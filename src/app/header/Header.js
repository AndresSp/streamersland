import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, SvgIcon } from '@material-ui/core';
import { ReactComponent as Logo } from './../../logo.svg';

const useStyles = makeStyles({
  toolbar: {
    padding: '0 30px',
    '& a': {
      margin: '0 5px'
    }
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <SvgIcon>
            <Logo/>
          </SvgIcon>
          <Typography variant="h6" color="inherit" noWrap>
            Streamland
          </Typography>
          { props.children }
        </Toolbar>
      </AppBar>
  );
}

export default Header;