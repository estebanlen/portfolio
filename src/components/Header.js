import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Navbar from './Navbar';
import backgroundImage from "../img/home.jpg";
import SocialMedia from './SocialMedia';

const styles={
    root:{
        backgroundImage: `url(${backgroundImage})`,
        height:"100vh",
        width:"100%",
        backgroundSize: 'cover',
        display:"flex",
        backgroundPosition: 'center',
    }
}

function Header(props) {
    return (
        <div style={styles.root}>
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item>
                    <Navbar/>
                </Grid>
                <Grid item>
                    <Typography variant="h1" color="initial">Esteban Lencina</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" color="initial">Developer</Typography>
                </Grid>
                <Grid item>
                    <SocialMedia/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;

