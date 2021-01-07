import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Carousel from '../components/Carousel';


function ItemScreen({item}) {
  
    return (
        <Card>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <Carousel img={item.img}/>
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