import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from '../components/Carousel';

import img from "../img/brownies.jpg";

function ItemScreen({item}) {
  
    return (
        <Card>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        {/* <CardMedia
                            component="img"
                            image={item.img}
                        /> */}
                        <Carousel/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h3" color="initial">{item.title}</Typography>
                        <Typography variant="subtitle1" color="initial">{item.subtitle}</Typography>
                        <Typography variant="body1" color="initial">
                            {item.desc}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
            
    );
  }

export default ItemScreen;