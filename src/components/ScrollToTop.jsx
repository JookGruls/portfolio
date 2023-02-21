import React from 'react';

export const scrollTo = (position = 0) => {
   document.getElementById('container').scrollTo({ top: position, left: 0, behavior: 'smooth' });
   return null;
};

const ScrollToTop = () => {
   return null;
};

export default ScrollToTop;
