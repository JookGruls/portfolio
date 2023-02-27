import React from 'react';
import { Container, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { usePositionScroll } from '../../../components/UsePositionScroll';

const Experience = () => {
   const { expRef } = usePositionScroll();
   return (
      <Container ref={expRef} maxWidth="md" id="experience">
         <Typography>Experience</Typography>
      </Container>
   );
};

export default Experience;
