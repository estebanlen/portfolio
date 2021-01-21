import React from 'react';
import { Grid } from '@material-ui/core';

import SocialMedia from './SocialMedia';

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
            <SocialMedia/>
        </Grid>
    );
}

export default Footer;