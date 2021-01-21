import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height:300,
    width: 350,
  },
  media: {
    height: 140,
  },
});

function AppCard({title,subtitle,img}) {
    const classes = useStyles();
    return (
      <CardActionArea>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={img[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
}

export default AppCard;