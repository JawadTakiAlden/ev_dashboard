import AppRouterProvider from "./providers/AppRouterProvider";
import ThemeProvider from "./providers/ThemeProviders";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <AppRouterProvider />
    </ThemeProvider>
  );
};

export default App;
