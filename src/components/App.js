import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";
import { Container } from "@mui/system";
import Home from "./Home";

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light'
    },
    // typography: {
    //   fontFamily: ["Roboto", "sans-serif"],
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
