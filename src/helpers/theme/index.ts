import { type PaletteMode } from '@mui/material';
import { purple } from '@mui/material/colors';

const getCustomPalette = (mode: PaletteMode) => ({
  palette: {
    ...(mode === 'light'
      ? {
          primary: {
            main: '#E040FB',
            light: '#E666FB',
            dark: '#9C2CAF',
            contrastText: '#fff',
          },
          secondary: {
            main: '#EA80FC',
            light: '#EE99FC',
            dark: '#A359B0',
            contrastText: '#000',
          },
          background: {
            default: '#fff',
            paper: '#e1bee7',
          },
          text: {
            primary: '#000',
            secondary: '#000',
          },
        }
      : {
          primary: {
            main: '#ab47bc',
            light: '#BB6BC9',
            dark: '#773183',
            contrastText: '#fff',
          },
          secondary: {
            main: '#e1bee7',
            light: '#E7CBEB',
            dark: '#9D85A1',
            contrastText: '#000',
          },
          background: {
            default: '#242424',
            paper: '#1a1a1a',
          },
          text: {
            primary: '#fff',
          },
        }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: 10,
          '&.Mui-disabled': {
            background: purple[200],
            color: '#fff',
          },
        },
      },
    },
  },
});

export default getCustomPalette;
