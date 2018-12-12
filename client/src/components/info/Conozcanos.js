import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  GridList,
  GridListTile
} from '@material-ui/core';

import equipo_humano from '../images/equipo_humano.jpg';
import fachada from '../images/fachada.jpg';

export default () => {
  return (
    <Grid container>
      <Grid item xs style={{ marginTop: 25, marginLeft: 25 }}>
        <GridList cellHeight={300} cols={3}>
          >
          <GridListTile cols={2}>
            <img src={fachada} alt='' />
          </GridListTile>
          <GridListTile>
            <img src={equipo_humano} alt='' />
          </GridListTile>
        </GridList>
      </Grid>
      <Grid item xs>
        <Paper style={{ margin: 25, padding: 25 }}>
          <Typography variant='body1' align='justify' paragraph>
            La historia de <b>Cartoplastic, S.A.</b> es la del dinamismo y la
            adaptación al mercado. Nuestros 45 colaboradores actuales forman un
            equipo compacto que trabaja en unas de las instalaciones más
            modernas de Panamá.
          </Typography>
          <Typography variant='body1' align='justify' paragraph>
            Desde el inicio de sus operaciones en <b>1983</b>, Cartoplastic ha
            ido innovando en tecnología y en servicios a sus clientes. Primero
            con la gran modernización de sus equipos y la ampliación de su
            capacidad productiva en 1993, coincidiendo con el cambio de marca al
            actual Cartoplastic, S.A.. Desde ese año se ofrece el servicio de
            personalización de los productos con serigrafía a dos colores hasta
            que en 2007 se pone en marcha la serigrafía a todo color para este
            tipo de productos.
          </Typography>
          <Typography variant='body1' align='justify' paragraph>
            En <b>2005</b>, Cartoplastic se muda de sus instalaciones históricas
            en la Avenida Balboa después de 22 años de labores e inaugura la
            moderna sede del Parque Industrial Costa del Este. La nueva planta
            permitió una mejor distribución de la cadena productiva, la
            instalación de aire acondicionado en toda la zona de producción y el
            mejor almacenamiento de la materia prima.
          </Typography>
          <Typography variant='body1' align='justify' paragraph>
            En <b>2006</b>, la compañía comienza a estampar papeles y cartulinas
            como paso previo al servicio actual, que incluye estampado de
            vinilos y el repujado de cartones y vinilos.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
