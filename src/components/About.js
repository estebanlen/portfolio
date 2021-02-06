import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import AppTitle from "./AppTitle";
import Skills from "./Skills";
import aboutImg from "../assets/img/about.jpg";
import cvFile from "../assets/download/CV_LencinaEsteban_2020.pdf";

const styles = {
  img: {
    width: "100%",
  },
};

function About(props) {
  return (
    <div>
      <AppTitle title="Sobre mí" variant="h3" />
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img style={styles.img} src={aboutImg} alt="" />
        </Grid>
        <Grid item md={8}>
          <Typography variant="body1" color="initial" align="justify">
            Soy un estudiante de Ingeniería en Informática con intención de
            encontrar un trabajo tiempo completo como desarrollador.
          </Typography>
          <br />
          <Typography variant="body1" color="initial" align="justify">
            Desarrollé habilidades de liderazgo, trabajo en equipo y resolución
            de confictos dentro del Movimiento Scout, en el cual soy Educador
            desde el 2015. Actualmente estoy desarrollando, junto a un colega,
            una aplicación para dispositivos móviles multiplataforma mediante la
            herramienta React Native, además de una versión web con React JS. cosa cosa
          </Typography>
          <Typography variant="body1" color="initial" align="justify">
            Algunas de mis cualidades son ser tranquilo, positivo, organizado, y
            tener facilidad de aprendizaje en lenguajes de programación.
          </Typography>
          <br />
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            download
            variant="outlined"
            color="inherit"
            href={cvFile}
            // className={classes.button}
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
