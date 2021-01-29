import React from "react";
import { Grid, Typography } from "@material-ui/core";

import AppLinearProgress from "./AppLinearProgress";
import skillsData from "../data/skillsData";

function DisplaySkills(props) {
  return (
    <div>
      <Typography variant="h5" color="initial">
        {props.title}
      </Typography>
      {props.list.map((skill) => (
        <AppLinearProgress name={skill.name} value={skill.value} />
      ))}
    </div>
  );
}

function Skills(props) {
  return (
    <div>
      <Typography variant="h4" align="center" color="initial">
        Habilidades
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((skills) => (
          <Grid item xs={12} md={4}>
            <DisplaySkills title={skills.title} list={skills.skills} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
