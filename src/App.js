import './App.css';
import { Paper, ThemeProvider } from '@material-ui/core';
// import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import HomeScreen from "./screens/HomeScreen";
import theme from './config/theme';
// import GridScreen from './screens/GridScreen';
// import ItemScreen from './screens/ItemScreen';
// import dataList from './data/dataList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper square>
        <HomeScreen/>
      </Paper>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //   <Paper square>
    //     <Router>
    //       <Switch>
    //         <Route exact path="/">
    //           <HomeScreen/>
    //         </Route>
    //         <Route exact path="/projects">
    //           <GridScreen/>
    //         </Route>
    //         {dataList.map(item=>
    //           <Route exact path={`/projects/${item.id}`}>
    //             <ItemScreen item={item}/>
    //           </Route>  
    //         )}
    //       </Switch>
    //     </Router>
    //   </Paper>
    // </ThemeProvider>
  );
}

export default App;
