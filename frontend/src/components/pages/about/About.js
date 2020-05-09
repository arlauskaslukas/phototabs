import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import logo from '../../../logo.png';
import {Component} from 'react'
import simonas from '../../../images/simon.jpg'
import julius from '../../../images/juliux.jpg'
import ben from '../../../images/ben.jpg'
import laurynas from '../../../images/laurynas.jpg'
import karolis from '../../../images/karolis.jpg'

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

  class MemberLeft extends Component {
    render() {
      return(
        <Grid container spacing={0} style={{borderBottom:'2px ridge', borderColor:'#8E9AAF', marginTop:'10px', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Grid item sm={6} style={{height:'100%', textAlign:'center'}}>
              <Typography variant='h3'>
                {this.props.name}
              </Typography>
              <Typography variant='h3' style={{fontWeight:'bold'}}>
                {this.props.title}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <img src={this.props.img} style={{width:'100%'}}></img>
            </Grid>
        </Grid>
      );
    }
  }
  
  class MemberRight extends Component {
    render() {
      return(
        <Grid container spacing={0} style={{borderBottom:'2px ridge', borderColor:'#8E9AAF', marginTop:'10px', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Grid item sm={6}>
              <img src={this.props.img} style={{width:'100%'}}></img>
            </Grid>
            <Grid item sm={6} style={{height:'100%', textAlign:'center'}}>
              <Typography variant='h3'>
                {this.props.name}
              </Typography>
              <Typography variant='h3' style={{fontWeight:'bold'}}>
                {this.props.title}
              </Typography>
            </Grid>
        </Grid>
      );
    }
  }
  
  
  function About() {
    const classes = useStyles();
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div style={{backgroundColor:'#efd3d7'}}>
          <Container style={{backgroundColor:'#C4E0F9', minHeight:'100vh', borderRight:'2px ridge', borderLeft:'2px ridge'}} maxWidth='lg'>
              <Typography variant='h2' align='center' style={{fontFamily:'Open Sans', borderBottom:'3px ridge', borderColor:'8E9AAF'}}>
                OUR TEAM
              </Typography>
              <MemberLeft img={simonas} name="SIMONAS BANSEVIČIUS" title="TEAM LEAD" text='Gimiau but bosu. GG WP' style={{fontFamily:'Open Sans'}}></MemberLeft>
              <MemberRight img={julius} name="JULIUS ARMALIS" title="DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Open Sans'}}></MemberRight>
              <MemberLeft img={ben} name="BENAS MILIŪNAS" title="APP DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Open Sans'}}></MemberLeft>
              <MemberRight img={laurynas} name="LAURYNAS VARNAS" title="AI DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Open Sans'}}></MemberRight>
              <MemberLeft img={karolis} name="KAROLIS BUTKUS" title="DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Open Sans'}}></MemberLeft>
          </Container>
        </div>
      </>
    );
  }
  export default About;
  