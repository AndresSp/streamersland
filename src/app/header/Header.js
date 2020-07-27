import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

function Header() {
  return (
    <Router>
      <div>
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Toolbar>
      </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;