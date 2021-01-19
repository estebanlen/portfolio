import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MyCard from './MyCard';

function LastProjects(props) {
    return (
        <div>
            <Typography align="center" variant="h2" color="initial">Últimos proyectos</Typography>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <MyCard/>
                </Grid>
                <Grid item>
                    <MyCard/>
                </Grid>
                <Grid item>
                    <MyCard/>
                </Grid>
            </Grid>
        </div>
    );
}

export default LastProjects;