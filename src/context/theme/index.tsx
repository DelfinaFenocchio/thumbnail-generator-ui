import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import useStore from '@store';
import getCustomPalette from '@theme';

const ThemeProvider = ({ children }) => {
  const themeMode = useStore((state) => state.themeMode);
  const theme = createTheme(getCustomPalette(themeMode));
  return (
    <ThemeProviderMUI theme={theme}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeProviderMUI>
  );
};
export default ThemeProvider;
