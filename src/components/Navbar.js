import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, Grid, Hidden, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from "react-scroll";

const AppLink = (props)=>(
  <Link
    activeClass="active"
    to={props.to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {props.children}
  </Link>
)

const NavbarButtons = ()=>(
  <>
    <AppLink to="home">
      <Button color="inherit">Home</Button>
    </AppLink>
    <AppLink to="projects">
      <Button color="inherit">Projects</Button>
    </AppLink>
    <AppLink to="about">
      <Button color="inherit">About</Button>
    </AppLink>
  </>
);

const FullNavbar = () => (
  <Hidden xsDown>
    <NavbarButtons/>
  </Hidden>
);

const HiddenNavbar = ()=>(
  <Hidden smUp>
    <Accordion  style={{backgroundColor:'transparent',border:0}} variant="outlined">
    <Grid container justify="center">
    <AccordionSummary
      expandIcon={<MenuIcon />}
      />
      </Grid>
    <AccordionDetails>
      <Grid container alignItems="center" direction="column">
        <NavbarButtons/>
      </Grid>
    </AccordionDetails>
    </Accordion>
  </Hidden>
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    border: 0
  },
  accordion:{
    width:"100%",
  },
  topButton:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

function Navbar(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="absolute" color="transparent" variant="outlined" elevation={0}>
        <Toolbar>
            <Grid container justify="center">
              <FullNavbar/>
              <HiddenNavbar/>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;