import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { usePositionScroll } from '../../../components/UsePositionScroll';
import { makeStyles } from '@mui/styles';
import Loading from '../../../components/loading/Loading';

const useStyles = makeStyles((theme) => ({
   text: {
      color: theme.palette.text.blushRose
   },
   h4: {
      color: theme.palette.text.gold
   }
}));

const Welcome = () => {
   const classes = useStyles();
   const { handleScrollTo } = usePositionScroll();

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
         <Button onClick={() => handleScrollTo('aboutRef')} variant="contained" color="primary">
            About Me
         </Button>
      </Box>
   );
};

export default Welcome;
