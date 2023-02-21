import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      height: '100%',
      overflow: 'auto',
      width: '100%'
   },
   wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'auto',
      paddingTop: 64
   },
   contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'auto'
   },
   content: {
      minHeight: 'calc(100vh - 64px)',
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.down('xs')]: {
         paddingTop: 45
      }
   }
}));

const PublicLayout = ({ children }) => {
   console.log('🚀 ~ file: PublicLayout.jsx:36 ~ PublicLayout ~ children:', children);
   const classes = useStyles();
   const ref = useRef(null);
   return (
      <div className={classes.root} id="root">
         <Navbar ref={ref} />
         <div className={classes.wrapper}>
            <div className={classes.contentContainer} id="container">
               <div className={classes.content} id="scrolling-container">
                  <Outlet context={[ref]} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PublicLayout;
