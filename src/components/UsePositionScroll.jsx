import React, { createContext, useContext, useRef, useState } from 'react';

const PositionScroll = createContext({});
export const usePositionScroll = () => useContext(PositionScroll);

const PositionScrollService = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const aboutRef = useRef(null);
   const expRef = useRef(null);
   const contactRef = useRef(null);

   const handleScrollTo = (position) => {
      if (!position) return;
      if (position === 'aboutRef') {
         aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (position === 'expRef') {
         expRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (position === 'contactRef') {
         contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (position === 'top') {
         document.getElementById('container').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      setIsLoading(true);
   };

   const value = {
      isLoading,
      aboutRef,
      expRef,
      contactRef,
      handleScrollTo,
      setIsLoading
   };

   return <PositionScroll.Provider value={value}>{children}</PositionScroll.Provider>;
};

export default PositionScrollService;
