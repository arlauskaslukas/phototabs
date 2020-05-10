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
            <Grid item sm={6} style={{height:'100%',fontSize:'25px', textAlign:'center'}}>
              <h3>
                {this.props.name}
              </h3>
              <h3>
                {this.props.title}
              </h3>
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
            <Grid item sm={6} style={{height:'100%', fontSize:'25px', textAlign:'center'}}>
              <h3>
                {this.props.name}
              </h3>
              <h3>
                {this.props.title}
              </h3>
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
        <div style={{backgroundColor:'#fcfcfc'}}>
          <Container style={{backgroundColor:'#fcfcfc',paddingTop:'150px', paddingBottom:'30px', minHeight:'100vh', fontFamily:'Montserrat-Light', fontSize:'15px'}} maxWidth='lg'>
              <h2 align='center' style={{fontFamily:'Montserrat', color:'#565656', fontSize:'50px'}}>
                Meet our Team
              </h2>
              <div style={{marginBottom:'150px'}}></div>
              <MemberLeft img={simonas} name="Simonas Bansevičius" title="TEAM LEAD" text='Gimiau but bosu. GG WP' style={{fontFamily:'Montserrat-Light'}}></MemberLeft>
              <MemberRight img={julius} name="Julius Armalis" title="DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Montserrat-Light'}}></MemberRight>
              <MemberLeft img={ben} name="Benas Miliūnas" title="APP DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Montserrat-Light'}}></MemberLeft>
              <MemberRight img={laurynas} name="Laurynas Varnas" title="AI DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Montserrat-Light'}}></MemberRight>
              <MemberLeft img={karolis} name="Karolis Butkus" title="DEVELOPER" text='Gimiau but bosu. GG WP' style={{fontFamily:'Montserrat-Light'}}></MemberLeft>
          </Container>
        </div>
      </>
    );
  }
  export default About;
  