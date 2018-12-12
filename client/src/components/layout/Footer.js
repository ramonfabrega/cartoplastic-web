import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default () => {
  return (
    <Grid container style={{ marginTop: 25 }}>
      <Grid item xs={12}>
        <Typography variant='overline' align='right'>
          <a
            href='https://github.com/ramonfabrega/'
            className='text-muted'
            style={{ marginRight: 25, textDecoration: 'none', color: 'black' }}
          >
            Made by Ramon Fabrega
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};
