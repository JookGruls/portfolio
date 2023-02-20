import React, { useRef } from 'react';
import clsx from 'clsx';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Logo from './Logo';
import pdf from '../../public/doc/sattra_cv.pdf';
import { scrollToTop } from './ScrollToTop';

const useStyles = makeStyles((theme) => ({
   root: {},
   toolbar: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   btn: {
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
         color: theme.palette.primary.main,
         backgroundColor: theme.palette.secondary.main
      }
   }
}));

const menus = [
   { path: 'about', label: 'About' },
   { path: '/experience', label: 'Experience' },
   { path: '/contact', label: 'Contact' },
   { path: '/resume', label: 'Resume' }
];

const Navbar = ({ className, ...rest }) => {
   const classes = useStyles();

   return (
      <AppBar color="secondary" className={clsx(classes.root, className)} elevation={0} {...rest}>
         <Toolbar className={classes.toolbar}>
            <Box component={Button} onClick={() => scrollToTop()}>
               <Logo />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
               {menus.map((item, idx) => (
                  <React.Fragment key={item.path + item.label}>
                     {idx === menus.length - 1 ? (
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                           <Button style={{ textDecoration: 'none' }} variant="contained" color="primary" size="small">
                              {item.label}
                           </Button>
                        </a>
                     ) : (
                        <Button onClick={() => scrollToTop('about')}>
                           <Typography className={classes.btn} variant="body2">
                              {item.label}
                           </Typography>
                        </Button>
                     )}
                  </React.Fragment>
               ))}
            </Box>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;