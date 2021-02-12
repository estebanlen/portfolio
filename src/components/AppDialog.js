import {
  Dialog,
  DialogContent,
  Grid,
  Slide,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function AppDialog({ item, open, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="md"
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Carousel img={item.img} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="initial">
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.body}
            >
              {item.desc}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href={item.link}
              target="_blank"
            >
              Repositorio del proyecto
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default AppDialog;
