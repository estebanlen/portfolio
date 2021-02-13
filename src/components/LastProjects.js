import React from "react";
import { Grid } from "@material-ui/core";

import AppTitle from "./AppTitle";
import Project from "./Project";
import projectsData from "../data/projectsData";

function LastProjects(props) {
  return (
    <div>
      <AppTitle variant="h3" title="Mis Proyectos" />
      <Grid container spacing={2} justify="center">
        {projectsData.map((project) => (
          <Grid item>
            <Project item={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LastProjects;
