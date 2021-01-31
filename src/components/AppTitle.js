import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function AppTitle({ disableMargin = false, variant, title }) {
  const classes = useStyles();
  return (
    <div className={!disableMargin && classes.root}>
      <Typography align="center" variant={variant} color="initial">
        {title}
      </Typography>
    </div>
  );
}

export default AppTitle;
