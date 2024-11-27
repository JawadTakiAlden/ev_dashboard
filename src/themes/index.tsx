import { createTheme, ThemeOptions } from "@mui/material";
import { typographyOverrides } from "./typography";
import { overideComponents } from "./overrideComponents";

interface ThemeCustomization {
  mode?: "dark" | "light";
}

export const theme = ({ mode = "dark" }: ThemeCustomization) => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: mode,
      // primary: {
      //   main: "#FF5F2D",
      // },
      // secondary: {
      //   main: "#D0F81D",
      // },
    },
    typography: typographyOverrides,
    components: overideComponents,
  };
  const themeContext = createTheme(themeOptions);
  return themeContext;
};
