import React from "react";
import { Grid } from "@material-ui/core";

import Navbar from "./Navbar";
import AppTitle from "./AppTitle";
import SocialMedia from "./SocialMedia";
import backgroundImage from "../assets/img/home.jpg";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    display: "flex",
    backgroundPosition: "center",
  },
};

function Header(props) {
  return (
    <div style={styles.root}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <AppTitle disableMargin variant="h1" title="Esteban Lencina" />
        </Grid>
        <Grid item>
          <AppTitle disableMargin variant="h4" title="Front-end developer" />
        </Grid>
        <Grid item>
          <SocialMedia />
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
