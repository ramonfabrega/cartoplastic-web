import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export default ({ c }) => {
  return (
    <Grid container>
      <Grid item xs={2} style={{ marginRight: 5 }}>
        <Paper elevation={3} style={{ backgroundColor: c.hex }}>
          <br />
        </Paper>
      </Grid>
      <Grid item xs>
        <Typography align='left'>{c.name}</Typography>
      </Grid>
    </Grid>
  );
};
