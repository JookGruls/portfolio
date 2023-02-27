import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container } from '@mui/material';

import Page from '../../layout/Page';
import About from './components/About';
import Experience from './components/Experience';
import Welcome from './components/Welcome';
import Loading from '../../components/loading/Loading';
import { usePositionScroll } from '../../components/UsePositionScroll';

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

const Home = () => {
   const classes = useStyles();
   const { isLoading } = usePositionScroll();

   if (isLoading) {
      return <Loading />;
   }

   return (
      <Page className={classes.root} title="I Am Full Stack Developer">
         <Container maxWidth="lg">
            <Welcome />
            <Box height="100vh" />
            <About />
            <Box height="100vh" />
            <Experience />
            <Box height="100vh" />
         </Container>
      </Page>
   );
};
export default Home;
