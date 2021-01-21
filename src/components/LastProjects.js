import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MyCard from './MyCard';
import projectsData from '../data/projectsData';

function LastProjects(props) {
    return (
        <div>
            <Typography align="center" variant="h3" color="initial">Últimos proyectos</Typography>
            <Grid container spacing={2} justify="center">
                {projectsData.map(project=>
                    <Grid item>
                        <MyCard item={project}/>
                    </Grid>    
                )}
                {/* <Grid item>
                    <MyCard/>
                </Grid>
                <Grid item>
                    <MyCard/>
                </Grid>
                <Grid item>
                    <MyCard/>
                </Grid> */}
            </Grid>
        </div>
    );
}

export default LastProjects;