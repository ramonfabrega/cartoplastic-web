import React from 'react';
import { AppBar, Toolbar, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Grid container justify='space-between'>
          <Grid item>
            <Typography
              variant='h5'
              color='inherit'
              component={Link}
              to='/productos/folders'
              style={{ textDecoration: 'none' }}
            >
              Cartoplastic, S.A.
            </Typography>
          </Grid>
          <Grid item>
            <Button color='inherit' component={Link} to='/productos/folders'>
              Inicio
            </Button>
            <Button color='inherit' component={Link} to='/conozcanos'>
              Conózcanos
            </Button>
            {/* <Button color='inherit' component={Link} to='/faq'>
              FAQ
            </Button>
            <Button color='inherit' component={Link} to='/pedidos'>
              Pedidos
            </Button> */}
            <Button color='inherit' component={Link} to='/contactenos'>
              Contáctenos
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
