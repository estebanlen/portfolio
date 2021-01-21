import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import cover from "../assets/img/code.jpg";

const useStyles = makeStyles({
  root: {
    width: 345,
    margin:5,
  },
  media: {
    height: 250,
  },
});

function MyCard({item}) {
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
              {item.title}
            </Typography>
            <Typography align="center" variant="body2" color="textSecondary" component="p">
              {item.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default MyCard;