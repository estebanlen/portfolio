import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import AppLinearProgress from './AppLinearProgress';

const frontendskills = [
    {name:"React.JS", value:70},
    {name:"React Native", value:70},
    {name:"JavaScript", value:60},
];
const backendskills = [
    {name:"PostgreSQL", value:60},
    {name:"MySQL", value:60},
];
const uiuxskills = [
    {name:"Adobe Photoshop", value:90},
    {name:"Adobe Illustrator", value:70},
];

function DisplaySkills(props){
    return(
        <div style={{border:10}}>
            <Typography variant="h5" color="initial">{props.title}</Typography>
            {props.list.map(skill=>
                <>
                    <Typography variant="button" color="initial">{skill.name}</Typography>
                    <AppLinearProgress value={skill.value}/>
                </>
            )}
        </div>
    )}
    

function Skills(props) {
    return (
        <div>
            <Typography variant="h4" align="center" color="initial">Habilidades</Typography>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <DisplaySkills title="FRONT-END" list={frontendskills}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <DisplaySkills title="BACK-END" list={backendskills}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <DisplaySkills title="UI/UX" list={uiuxskills}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Skills;