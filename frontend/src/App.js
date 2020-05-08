import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import NavBar from './components/NavBar';
import Homepage from './components/pages/homepage/Homepage';
import About from './components/pages/about/About';
import Phototabs from './components/pages/phototabs/Phototabs';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/phototabs'} component={Phototabs} />
          <Route exact path={'/about'} component={About} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
