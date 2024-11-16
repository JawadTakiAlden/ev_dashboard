import {
  ThemeProvider as BaseThemeProvider,
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
} from "@mui/material";
import { theme } from "../themes";
import { ReactNode } from "react";
import { useTheme } from "../store/themeStore";

export interface BaseProviderInterface {
  children?: ReactNode | ReactNode[];
}

const ThemeProvider = ({ children }: BaseProviderInterface) => {
  const { mode } = useTheme((state) => state);
  const appTheme = theme({ mode });
  return (
    <StyledEngineProvider injectFirst>
      <BaseThemeProvider theme={appTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":fullscreen": {
              backgroundColor: appTheme.palette.background.default,
            },
          }}
        />
        {children}
      </BaseThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
