import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, Typography } from '@mui/material';

import Page from '../../layout/Page';
import About from './components/About';
import { useOutlet, useOutletContext } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      width: '100vw',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(5)
   },
   text: {
      color: theme.palette.text.blushRose
   },
   h4: {
      color: theme.palette.text.gold
   }
}));

const Home = ({ props }) => {
   console.log('🚀 ~ file: Home.jsx:25 ~ Home ~ props:', props);
   const classes = useStyles();
   const aboutRef = useRef(null);
   const [ref] = useOutletContext();
   console.log('🚀 ~ file: Home.jsx:30 ~ Home ~ ref:', ref);

   const handleToAbout = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      console.log('🚀 ~ file: Home.jsx:34 ~ handleToAbout ~ aboutRef:', aboutRef);
   };

   return (
      <Page className={classes.root} title="I Am Full Stack Developer">
         <Container maxWidth="lg">
            <Welcome handleClick={handleToAbout} />
            <Box height="100vh" />
            <About ref={aboutRef} />
            <Box height="100vh" />
         </Container>
      </Page>
   );
};

const Welcome = ({ handleClick }) => {
   const classes = useStyles();
   return (
      <Box mt={10} display="flex" alignItems="flex-start" flexDirection="column">
         <Typography className={classes.text}>Hi' my name is</Typography>
         <Typography className={classes.h4} variant="h2">
            Sattra Anuwareepong (MIKE)
         </Typography>
         <Typography className={classes.text} variant="h2">
            I build things for the web.
         </Typography>
         <Typography className={classes.text}>
            I like to craft solid and scalable frontend products with great user experiences.
         </Typography>
         <Box my={1} />
         <Button onClick={handleClick} variant="contained" color="primary">
            About Me
         </Button>
      </Box>
   );
};

export default Home;
