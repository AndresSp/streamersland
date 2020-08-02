import React from 'react';
import Header from './app/header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
import Home from './app/pages/home/Home';
import About from './app/pages/about/About';

function App() {
  return (
      <Router>
      <Header>
      <Button color="inherit" component={Link} to="/">Inicio</Button>
      <Button color="inherit" component={Link} to="/nosotros">Nosotros</Button>
      </Header>
        <Switch>
              <Route path="/nosotros">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
        </Switch>
      </Router>
  );
}

export default App;
