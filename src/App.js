import './App.css';
import { createMuiTheme, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import GridScreen from './screens/GridScreen';
import ItemScreen from './screens/ItemScreen';
import dataList from './data/dataList';

const theme = createMuiTheme({
  palette:{
    type:"dark",
  }
});

const useStyles = makeStyles(({
  root: {
    display:'flex',
  },
}))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper square className={classes.root}>
        <Router>
          <Switch>
            <Route exact path="/list">
              <GridScreen/>
            </Route>
            <Route exact path="/item">
              <ItemScreen item={dataList[0]}/>
            </Route>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
