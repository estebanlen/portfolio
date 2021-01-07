import React from 'react';

import backgroundImage from "../img/home.jpg";
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';
import SocialMedia from '../components/SocialMedia';

const styles={    
    paperContainer:{
        backgroundImage: `url(${backgroundImage})`,
        height:"100vh",
        flex: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display:"flex",
    }
}

function HomeScreen(props) {
    return (
        <div style={styles.paperContainer}>
            <Grid container direction="column" justify="center" alignItems="center">
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

export default HomeScreen;