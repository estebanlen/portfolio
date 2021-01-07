import React from 'react';
import { Grid } from '@material-ui/core';

import AppCard from "../components/AppCard";
import dataList from '../data/dataList';

function GridScreen(props) {
    
    return (
        <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
      >
        {dataList.map(item=>
          <Grid item>
            <AppCard title={item.title} subtitle={item.subtitle} img={item.img}/>
          </Grid>  
        )}
      </Grid>
    );
}

export default GridScreen;
