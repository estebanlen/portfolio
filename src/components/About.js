import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import AppTitle from "./AppTitle";
import Skills from "./Skills";
import aboutImg from "../assets/img/about.jpg";
import cvFile from "../assets/download/CV_LencinaEsteban_2021.pdf";

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
            encontrar trabajo tiempo completo como desarrollador.
          </Typography>
          <br />
          <Typography variant="body1" color="initial" align="justify">
            Desarrollé habilidades de liderazgo, trabajo en equipo y resolución
            de confictos dentro del Movimiento Scout, en el cual soy Educador
            desde el 2015.
          </Typography>
          <br />
          <Typography variant="body1" color="initial" align="justify">
            Actualmente estoy desarrollando junto a un colega una aplicación
            para dispositivos móviles con React Native, y de una versión web con
            React JS. Además estoy desarrollando una página web de portafolio
            propia, con React JS y Material UI.
          </Typography>
          <Typography variant="body1" color="initial" align="justify">
            Estoy interesado en aprender nuevas tecnologías back-end, como Node
            JS. Fuera de la programación, me apasiona la fotografía de paisaje y
            aves.
          </Typography>
          <br />
          <Typography variant="body1" color="initial" align="justify">
            Algunas de mis cualidades son: positivo, organizado, autodidacta,
            buen trabajo
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
