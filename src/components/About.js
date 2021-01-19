import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import aboutImg from "../img/about.jpg"

const styles={
    img:{
        width:"100%",

    }
};

function About(props) {
    return (
        <div>
            <Typography align="center" variant="h2" color="initial">Sobre mi</Typography>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <img
                        style={styles.img}
                        src={aboutImg}
                        alt=""
                    />
                </Grid>
                <Grid item  md={8}>
                    <Typography variant="body1" color="initial" align="justify">
                        Soy un estudiante de Ingeniería en Informática con intención de encontrar un
                        trabajo tiempo completo como desarrollador.
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="initial" align="justify">
                        Desarrollé habilidades de liderazgo, trabajo en equipo y resolución de confictos
                        dentro del Movimiento Scout, en el cual soy Educador desde el 2015.
                        Actualmente estoy desarrollando, junto a un colega, una aplicación para
                        dispositivos móviles multiplataforma mediante la herramienta React Native, además
                        de una versión web con React JS.
                        Algunas de mis cualidades son ser tranquilo, positivo, organizado, y tener facilidad
                        de aprendizaje en lenguajes de programación.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;