import React from "react";
import { Box, LinearProgress, Typography } from "@material-ui/core";

function AppLinearProgress({ name, value }) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={100}>
        <Typography variant="button" color="initial">
          {name}
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default AppLinearProgress;
