import AppRouterProvider from "./providers/AppRouterProvider";
import ThemeProvider from "./providers/ThemeProviders";
const App = () => {
  return (
    <ThemeProvider>
      <AppRouterProvider />
    </ThemeProvider>
  );
};

export default App;
