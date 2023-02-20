import { ThemeProvider } from '@mui/material';
import React from 'react';
import GlobalStyles from './components/GobalStyles';
import Routes from './Routes';
import theme from './theme/Theme';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Routes />
      </ThemeProvider>
   );
};

export default App;
