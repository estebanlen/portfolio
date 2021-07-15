import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import AppTitle from "./AppTitle";
import Skills from "./Skills";
import aboutImg from "../assets/img/about.jpg";
import cvFile from "../assets/download/CV_LencinaEsteban_2021-07.pdf";
import aboutData from "../data/aboutData";

const styles = {
  img: {
    width: "100%",
  },
};

const showText = () =>
  aboutData.map((p) => (
    <div>
      <Typography variant="body1" color="initial" align="justify">
        {p}
      </Typography>
      <br />
    </div>
  ));

function About(props) {
  return (
    <div>
      <AppTitle title="Sobre mí" variant="h3" />
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img style={styles.img} src={aboutImg} alt="" />
        </Grid>
        <Grid item md={8}>
          {showText()}
          <Button
            size="large"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            download="CV_LencinaEsteban_Julio2021"
            variant="outlined"
            color="inherit"
            href={cvFile}
            startIcon={<GetAppIcon />}
          >
            Descargar CV
          </Button>
        </Grid>
      </Grid>
      <Skills />
    </div>
  );
}

export default About;
