import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Color from './Color';
import { colors } from './metadata';

export default ({ colorData }) => {
  const colorView = [];

  for (const key in colorData) {
    const colorSet = colorData[key].map(c => {
      return colors.find(tgt => tgt.name === c);
    });

    const colorsList = [];

    colorsList.push(
      <Grid item xs={12} key={key}>
        <Typography variant='overline'>{key}</Typography>
      </Grid>
    );

    colorSet.forEach(c => {
      colorsList.push(
        <Grid item xs={12} style={{ marginTop: 10 }} key={c.name}>
          <Color c={c} />
        </Grid>
      );
    });

    colorView.push(
      <Grid item xs={6} sm key={key} style={{ marginTop: 10 }}>
        <Grid container>{colorsList}</Grid>
      </Grid>
    );
  }
  return <Grid container>{colorView}</Grid>;
};
