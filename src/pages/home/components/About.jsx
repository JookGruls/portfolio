import React, { forwardRef } from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowIcon from '@mui/icons-material/ArrowRight';

const useStyles = makeStyles((theme) => ({
   divider: {
      backgroundColor: theme.palette.text.gold,
      width: '120px',
      height: '2px'
   },
   h4: {
      color: theme.palette.text.blushRose
   },
   text: {
      color: theme.palette.text.gold
   },
   skills: {
      color: theme.palette.secondary.main
   },
   title: {
      color: theme.palette.primary.main
   },
   img: {
      width: 290,
      height: 290,
      borderRadius: '50%',
      border: '4px solid transparent',
      padding: 1,
      '&:hover': {
         borderTopColor: theme.palette.secondary.main,
         borderLeftColor: theme.palette.secondary.main,
         border: `4px solid ${theme.palette.primary.main}`
      }
   }
}));

const skills = ['Javascript', 'ReactJS', 'React Native', 'HTML', 'CSS', 'PHP', 'Laravel', 'Node.js'];

const About = forwardRef(({ ...props }, ref) => {
   const classes = useStyles();

   return (
      <Container ref={ref} maxWidth="md" id="about">
         <Box width="100%">
            <Box my={4} display="flex" alignItems="center">
               <Typography className={classes.h4} variant="h4">
                  About Me
               </Typography>
               <Divider className={classes.divider} textAlign="center" variant="middle" />
            </Box>
            <Box mb={1} display="flex" alignItems="center" justifyContent="space-between">
               <Box width="60%">
                  <Typography className={classes.text}>
                     Hello! My name is Sattra Anuwareepong (MIKE) and I enjoy creating things that live on the internet.
                     My interest in web development started back in 2012 When I decided to try editing the school
                     website by inspecting and editing text, images, I called it a hack. Taught me a lot about HTML and
                     CSS!
                  </Typography>
               </Box>
               <img src="../../../../public/assets/images/IMG_9064.jpg" loading="lazy" className={classes.img} />
            </Box>
            <Box mb={1} display="flex" alignItems="center">
               <Typography className={classes.h4}>
                  I became interested and learned about web writing from then on. Until now I am working as a full stack
                  developer.
               </Typography>
            </Box>
            <Box mb={2} display="flex" alignItems="center">
               <Typography className={classes.skills}>
                  Here are a few technologies I’ve been working with recently:
               </Typography>
            </Box>
            <Grid container spacing={1}>
               {skills.map((skill) => (
                  <Grid key={skill + skill} item xs={6} component={Box} display="flex" alignItems="center">
                     <ArrowIcon fontSize="small" color="secondary" />
                     <Box mr={0.5} />
                     <Typography className={classes.title}>{skill}</Typography>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Container>
   );
});

export default About;
