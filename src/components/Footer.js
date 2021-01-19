import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from "react-scroll";

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
            <IconButton size="medium" onClick={()=>scroll.scrollToTop()}>
                <KeyboardArrowUpIcon/>
            </IconButton>
        </Grid>
    );
}

export default Footer;