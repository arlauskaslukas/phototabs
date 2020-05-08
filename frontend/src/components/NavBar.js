import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import logo from '../logo.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    zIndex: 3000,
  },
  grow: {
    flexGrow: 1,
  },
  spacingBetween: {
    flexGrow: 0.15,
  },
  spacingLogo: {
    flexGrow: 0.7
  },
  icon: {
    marginLeft: '6px',
    padding: '0px',
  },
  nav: {
    'font-size': '1.2rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderBottom: '1px ridge',
    fontFamily: 'Open Sans',
    color: 'black'
  },
  icons: {
    color: 'white'
  }
});

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          
          <Button className={classes.icon} href="/" aria-label="home">
            <img src={logo} alt="logo" width={'70px'} height={'70px'} />
          </Button>

          <div className={classes.spacingLogo} />

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/phototabs">
            ABOUT PHOTOTABS
          </Button>

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/about">
            ABOUT THE TEAM
          </Button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
