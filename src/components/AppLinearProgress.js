import React from "react";
import { Box, LinearProgress, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
  },
}));

function AppLinearProgress({ name, value }) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={100} className={classes.root}>
        <Typography variant="button" color="initial">
          {name}
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress color="secondary" variant="determinate" value={value} />
      </Box>
      {/* <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

export default AppLinearProgress;
