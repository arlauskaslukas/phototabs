import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import logo from '../../../logo.png';

const title = 'Homepage';

const useStyles = makeStyles({
    blog_header: {
      position: 'absolute',
      top: '70%',
      left: '23%',
      color: 'orange',
      'font-family': 'Georgia, serif',
      'font-style': 'italic',
      'letter-spacing': '1px',
      'font-size': '53px',
      'text-shadow': '-6px 0 black, 0 3px black, 1px 0 black, 0 -3px black',
      maxHeight: '100%'
    },
    shop_header: {
      position: 'absolute',
      top: '70%',
      left: '66%',
      color: 'grey',
      'font-family': 'Georgia, serif',
      'font-style': 'italic',
      'letter-spacing': '1px',
      'font-size': '53px',
      'text-shadow': '-5px 0 black, 0 2px black, 1px 0 black, 0 -3px black',
    },
    img: {
      height:'100vh',
      width: 'auto',
      position: 'absolute',
    },
    Grid: {
      height: '100vh',
      position: 'absolute'
    }
  });
  
  function About() {
    const classes = useStyles();
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1>ABOUT</h1>
        <Container style={{backgroundColor:'#C4E0F9', display:'flex'}}>
            <img src={logo}></img>
        </Container>
      </>
    );
  }
  export default About;
  