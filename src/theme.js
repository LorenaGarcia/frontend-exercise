import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#5349DB",
    },
  },
});

export default theme;
