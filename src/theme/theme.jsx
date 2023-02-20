import { alpha, colors, createTheme } from "@mui/material";

const palette = {
   primary: {
      main: '#2f5d8c',
      pallid: 'rgba(47, 93, 140, 0.1)'
   },
   secondary: {
      main: '#102526',
      pallid: 'rgba(16, 37, 38, 0.1)'
   },
   error: {
      main: colors.red.A400,
      pallid: 'rgba(244, 67, 54, 0.1)'
   },
   background: {
      default: '#D8D8D6',
      paper: colors.common.white
   },
   action: {
      selected: alpha('#2f5d8c', 0.08)
   },
   text: {
      gold: '#896E38',
      blushRose: '#A38881'
   }
};

const theme = createTheme({
   palette
});

export default theme;