import React from 'react';
import { Grid } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';

export default ({ imageData }) => {
  return (
    <Grid container justify='center'>
      <Grid item xs={9}>
        <ImageGallery
          items={imageData}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          autoPlay={true}
          disableArrowKeys={true}
        />
      </Grid>
    </Grid>
  );
};
