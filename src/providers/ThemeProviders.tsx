import {
  ThemeProvider as BaseThemeProvider,
  Box,
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
            "*::-webkit-scrollbar": {
              width: "10px", // Width of the scrollbar
              height: "10px", // Height of the scrollbar for horizontal scrolling
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0", // Track color
              borderRadius: "10px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // Scrollbar thumb color
              borderRadius: "10px",
              border: "2px solid #f0f0f0", // Optional: Add space around thumb
            },
            "*::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555", // Scrollbar thumb hover color
            },
          }}
        />
        <Box
          className={mode === "light" ? "light" : "dark"}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: mode === "light" ? "#fff" : "#000",
            zIndex: -2,
            clipPath: "circle(0% at 50% 50%)",
            transition: "1s ease-out",
            "&.dark": {
              clipPath: "circle(150% at 50% 50%)",
            },
          }}
        />
        {children}
      </BaseThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
