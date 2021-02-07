import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin:5,
  },
  media: {
    height: 300,
  },
});

function MyCard({handleOpen,item}) {
  const classes = useStyles();


    return (
      <Card onClick={handleOpen} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.img[0]}
            title="My Card"
          />
          <CardContent>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default MyCard;