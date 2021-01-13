import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <Link style={{color:'inherit', textDecoration: 'inherit'}}to={`/projects/${item.id}`}>
              <AppCard title={item.title} subtitle={item.subtitle} img={item.img}/>
            </Link>
          </Grid>  
        )}
      </Grid>
    );
}

export default GridScreen;
