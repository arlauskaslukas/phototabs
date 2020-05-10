import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import logo from '../../../logo.png';
import first from '../../../images/first.jpg'
import second from '../../../images/second.jpg'
import phone from '../../../images/phone.jpg'
import arrow from '../../../images/arrow.png'
import result from '../../../images/result.jpg'
import final from '../../../images/final.jpg'
import head from '../../../images/head.jpg'
import { Divider } from '@material-ui/core';

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
  
  function Phototabs() {
    const classes = useStyles();
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div style={{backgroundColor:'#000000',display:'flex', flex:'wrap',overflow:'auto', paddingBottom:'0px'}}>
        <div style={{position:'absolute', top:'37%', left:'20%', zIndex:'3', fontFamily:'Montserrat', color:'#FFFFFF', fontSize:'60px', fontWeight:'bold', borderBottom:'1px solid #FFFFFF', paddingBottom:'25px'}}>
            Photo-Tabs
        </div>
        
        <div style={{position:'absolute', top:'50%', left:'20%', zIndex:'3', fontFamily:'Montserrat-Light', color:'#FFFFFF', fontSize: '30px', fontWeight:'lighter'}}>
          The guitar app that helps you to become a proffesional
        </div>
        
        <img src={head} style={{display:'block', marginLeft:'auto', marginRight:'auto', minWidth:'100%', height:'parent', opacity:'0.65'}}></img>
        </div>
        <div width='100%' style={{backgroundColor:'#FCFCFC'}}>
          <Container style={{minHeight:'100vh', marginTop:'8px'}} maxWidth='lg'>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{}}>
                  
                </Grid>
                <Grid item xs={12} style={{fontFamily:'Montserrat-Light', textAlign:'center', fontSize:'15px'}}>
                  <h1 style={{marginTop:'150px', marginBottom:'80px', fontFamily:'Montserrat', color:'#565656'}}>Let us imagine a story</h1>
                  
                  <h2>
                    So... Let's suppose you're trying to learn how to play a few songs on a guitar! Maybe you want to impress that spicy girl or you want to become a member of a local band...
                  </h2>
                </Grid>
                <Grid item xs={12} style={{fontFamily:'Montserrat-Light', textAlign:'center', fontSize:'15px'}}>
                  <h2>
                    You take your guitar, search for a song to play and you see this horror:
                  </h2>
                </Grid>
                <Grid item xs={12} style={{}}>
                  <img src={second} style={{display:'block', marginLeft:'auto', marginBottom:'50px', marginRight:'auto'}}></img>
                </Grid>
                <Grid item xs={12} style={{fontFamily:'Montserrat-Light', textAlign:'center', fontSize:'15px'}}>
                  <h2>
                    How you're supposed to learn all these notes if the date's tomorrow? <br/> <br/>
                    ...<br/> <br/>
                    Fear not, fellow guitarist! <br/> <br/>
                    PhotoTabs will be here to help you by turning all these notes into a simple and understandable tabs notation!
                  </h2>
                </Grid>
                <Grid item xs={12} style={{fontFamily:'Montserrat-Light', textAlign:'center', fontSize:'15px'}}>
                  <h1 style={{marginTop:'150px', marginBottom:'100px', fontFamily:'Montserrat', color:'#565656'}}>
                    "How this works?" - you ask. We answer:
                  </h1>
                </Grid>
                <Grid item xs={3}>
                  <img src={phone} style={{height:'200px', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                  <Typography variant='h6' style={{fontFamily:'Montserrat-Light', textAlign:'center'}}>
                    You take your smartphone...
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src={second} style={{height:'200px', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                  <Typography variant='h6' style={{fontFamily:'Montserrat-Light', textAlign:'center'}}>
                    Take a photo of your notation...
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src={arrow} style={{height:'200px', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                  <Typography variant='h6' style={{fontFamily:'Montserrat-Light', textAlign:'center'}}>
                    And using our app's AI algorithm...
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src={result} style={{height:'200px', display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                  <Typography variant='h6' style={{fontFamily:'Montserrat-Light', textAlign:'center'}}>
                    You end up with fully understandable tabs notation
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{fontFamily:'Montserrat-Light', textAlign:'center', fontSize:'15px'}}>
                  <h2 style={{marginTOp:'100px', marginBottom:'60px'}}>
                    Using our app, you can learn songs on guitar easier and land that girl and 10 years later play songs not only to her but to the children of yours too... (Don't tell her about us though ;) )
                  </h2>
                </Grid>
                <Grid item xs={12} style={{}}>
                  <img src={final} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}></img>
                </Grid>
              </Grid>
          </Container>
        </div>
      </>
    );
  }
  export default Phototabs;
  