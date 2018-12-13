import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import ImageView from '../common/ImageView';

import { images, data } from './data/papeleriaData';

export default () => {
  return (
    <Grid container style={{ padding: 25 }}>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <ImageView imageData={images} />
      </Grid>
      <Grid item xs={12} sm>
        <Grid item xs={12}>
          {data.map(entry => {
            return (
              <Typography
                variant='body1'
                gutterBottom
                key={entry[0] + entry[1] + entry[2]}
                align='justify'
              >
                {entry[0]}
                <strong>{entry[1]}</strong>
                {entry[2]}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
