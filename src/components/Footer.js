import React from 'react';
import { Grid } from '@material-ui/core';

import SocialMedia from './SocialMedia';
import AppTitle from './AppTitle';

const styles={
    footer:{
        backgroundColor:'black',
        height:'25vh',
    },
};

function Footer(props) {
    return (
        <Grid
            container
            direction="column" 
            justify="center" 
            alignItems="center" 
            style={styles.footer}
            >
            <AppTitle variant="h4" title="Contacto"/> 
            <SocialMedia size="large"/>
        </Grid>
    );
}

export default Footer;