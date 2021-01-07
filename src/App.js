import './App.css';
import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import HomeScreen from "./screens/HomeScreen";
import GridScreen from './screens/GridScreen';
import ItemScreen from './screens/ItemScreen';
import dataList from './data/dataList';

const theme = createMuiTheme({
  palette:{
    type:"dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper square>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
            <Route exact path="/list">
              <GridScreen/>
            </Route>
            {dataList.map(item=>
              <Route exact path={`/item/${item.id}`}>
                <ItemScreen item={item}/>
              </Route>  
            )}
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
