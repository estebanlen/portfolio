import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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
}));

function Navbar(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="absolute" color="transparent" variant="outlined" elevation={0}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EL
          </Typography> */}
            <Grid container justify="center">
                <Grid item>
                    <Button color="inherit">Home</Button>
                </Grid>
                <Grid item>
                    <Button color="inherit">Projects</Button>
                </Grid>
                <Grid item>
                    <Button color="inherit">About</Button>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;