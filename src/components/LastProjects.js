import React from "react";
import { Grid } from "@material-ui/core";

import AppTitle from "./AppTitle";
import MyCard from "./MyCard";
import projectsData from "../data/projectsData";

function LastProjects(props) {
  return (
    <div>
      <AppTitle title="Últimos Proyectos" variant="h3" />
      <Grid container spacing={2} justify="center">
        {projectsData.map((project) => (
          <Grid item>
            <MyCard item={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LastProjects;
