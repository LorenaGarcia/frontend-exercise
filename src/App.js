import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import Home from "./views/Home";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);
export default App;
