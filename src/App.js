import "./App.css";
import { Paper, ThemeProvider } from "@material-ui/core";

import HomeScreen from "./screens/HomeScreen";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper square style={{ backgroundColor: "#212121" }}>
        <HomeScreen />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
