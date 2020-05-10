import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import logo from '../../../logo.png';
import applogo from '../../../images/app.jpg'
import teamlogo from '../../../images/team.jpg'
import { Component } from 'react'

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

  class ImgButton extends Component {
    render() {
      return (
        <a href={this.props.url}>
          <img src={this.props.image} alt={'Page logo'} style={{height: '93vh', width:'50vw',transition:'opacity 300ms ease-in-out', filter:'opacity(100%)'}} 
          
          />
        </a>
      );
    }
  }
  
  function Homepage() {
    const classes = useStyles();
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Grid container 
              spacing={0}
              alignItems="stretch"
              justify="space-between"
              style={{height:'auto', zoom:'1.335'}}
              >
                <Grid item xs={12} sm={6}>
                  <ImgButton image={applogo} url={'/phototabs'} text={''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ImgButton
                  image={teamlogo}
                  url={'/about'}
                  text={''}
                  style={classes.img}
                  />
                </Grid>
        </Grid>
      </>
    );
  }
  export default Homepage;
  