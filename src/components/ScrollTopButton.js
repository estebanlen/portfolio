import React from 'react'
import { Box, IconButton, makeStyles, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

function ScrollTopButton({window}) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    return (
        
      <Zoom in={trigger}>
        <Box className={classes.root} borderRadius="50%" border={1}>
         <IconButton  size="medium" variant="contained" onClick={()=>scroll.scrollToTop()}>
            <KeyboardArrowUpIcon/>
          </IconButton>
        </Box>
      </Zoom>
    );
  }

  export default ScrollTopButton;