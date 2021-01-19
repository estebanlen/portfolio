import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import cover from "../img/code.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:5,
  },
  media: {
    height: 250,
  },
});

function MyCard(props) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cover}
            title="My Card"
          />
          <CardContent>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              Proyecto
            </Typography>
            <Typography align="center" variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default MyCard;