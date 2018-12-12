import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core';
import Color from './Color';

import {
  colors,
  portafolioColors,
  divisionColors,
  portafolioImages,
  divisionImages,
  portafolioMecanismos
} from '../../common/metadata';

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  }
});

class Portafolios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'portafolios'
    };
  }

  handleClick = (e, name) => {
    this.setState({
      selectedOption: name
    });
  };

  buildColors = () => {
    const res = [];

    const data =
      this.state.selectedOption === 'portafolios'
        ? portafolioColors
        : divisionColors;

    for (const key in data) {
      const colorSet = data[key].map(c => {
        return colors.find(tgt => tgt.name === c);
      });

      const colorsContent = [];

      colorsContent.push(
        <Grid item xs={12} key={key}>
          <Typography variant='overline'>{key}</Typography>
        </Grid>
      );

      colorSet.forEach(c => {
        colorsContent.push(
          <Grid item xs={12} style={{ marginTop: 10 }} key={c.name}>
            <Color c={c} />
          </Grid>
        );
      });
      res.push(
        <Grid item xs key={key}>
          <Grid container>{colorsContent}</Grid>
        </Grid>
      );
    }
    return <Grid container>{res}</Grid>;
  };

  buildImages = () => {
    return (
      <Grid container style={{ marginTop: 10 }} justify='center'>
        <Grid item xs={9}>
          <ImageGallery
            items={
              this.state.selectedOption === 'portafolios'
                ? portafolioImages
                : divisionImages
            }
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

  buildPortafolioInfo = () => {
    const cards = [];

    for (const [key, value] of Object.entries(portafolioMecanismos)) {
      const tableRows = [];
      for (const [innerKey, innerValue] of Object.entries(value.measurements)) {
        tableRows.push(
          <TableRow key={innerValue}>
            <TableCell>{innerKey}</TableCell>
            <TableCell>{innerValue}</TableCell>
          </TableRow>
        );
      }
      cards.push(
        <Card style={{ maxWidth: 250, margin: 5 }} key={key}>
          <CardActionArea>
            <CardContent>
              <Typography variant='overline'>{key}</Typography>
            </CardContent>
            <CardMedia
              style={{ height: 150 }}
              image={value.image}
              title={key}
            />
            <CardContent style={{ padding: 0 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tamaño</TableCell>
                    <TableCell>Cantidad de hojas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{tableRows}</TableBody>
              </Table>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }

    return (
      <Grid container>
        <Grid item xs={12} sm={9} lg={6} style={{ marginTop: 25 }}>
          <Grid container spacing={8} justify='center'>
            {cards}
          </Grid>
        </Grid>
        <Grid item xs style={{ marginTop: 25 }}>
          <Typography variant='h5' gutterBottom>
            Denominaciones a la venta
          </Typography>
          <Typography variant='body1' gutterBottom>
            11” x 8 ½”
          </Typography>
          <Typography variant='body1' gutterBottom>
            14” x 8 ½”
          </Typography>
          <Typography variant='body1' gutterBottom>
            9” X 7” *
          </Typography>
          <Typography variant='body1' gutterBottom>
            11” x 17
          </Typography>
          <Typography variant='body1' gutterBottom>
            Tamaños especiales
          </Typography>
          <Typography variant='caption'>
            El tamaño 9” x 7” está disponible en argolla redonda de 1” y 1 1/2”,
            y en argolla tipo “D” de 1”.
          </Typography>
        </Grid>
      </Grid>
    );
  };

  buildDivisionInfo = () => {
    return (
      <Grid container>
        <Grid item xs={9} style={{ marginTop: 25 }}>
          <Typography variant='body1' gutterBottom align='justify'>
            Las divisiones se fabrican principalmente en cartulina de 90 lbs
            blanca, pero también hay la posibilidad de hacerlas en cartulina
            celeste, rosada, verde claro y amarillo. Además, se pueden solicitar
            divisiones en cartulinas fluorescentes y en cualquier otro material
            disponible en el mercado.
          </Typography>
          <Typography variant='body1' gutterBottom align='justify'>
            Estas divisiones pueden llevar impresión en las pestañas para
            personalizarlas. Las pestañas están protegidas del uso continuo por
            medio de un material plástico (mylar), que está disponible en una
            amplia gama de colores (ver listado de colores disponibles arriba).
            Los tamaños de las divisiones se adaptan a las diferentes medidas de
            portafolios y/o folders que el cliente utilice. El cliente elije la
            cantidad de divisiones que desea para cada portafolio/folder, y el
            tamaño de la pestaña dependerá de la cantidad de posiciones que se
            requieran.
          </Typography>
          <Typography variant='body1' gutterBottom align='justify'>
            Los tamaños de las divisiones se adaptan a las diferentes medidas de
            portafolios y/o folders que el cliente utilice. El cliente elije la
            cantidad de divisiones que desea para cada portafolio/folder, y el
            tamaño de la pestaña dependerá de la cantidad de posiciones que se
            requieran.
          </Typography>
          <Typography variant='body1' gutterBottom align='justify'>
            El cliente elije la cantidad de divisiones que desea para cada
            portafolio/folder, y el tamaño de la pestaña dependerá de la
            cantidad de posiciones que se requieran.
          </Typography>
        </Grid>
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;
    const colors = this.buildColors();
    const images = this.buildImages();
    const info =
      this.state.selectedOption === 'portafolios'
        ? this.buildPortafolioInfo()
        : this.buildDivisionInfo();

    return (
      <Grid container style={{ marginTop: 25, paddingRight: 5 }}>
        <Grid item xs={12} md={3} lg={2}>
          <List component='nav'>
            <ListItem
              button
              selected={this.state.selectedOption === 'portafolios'}
              onClick={e => this.handleClick(e, 'portafolios')}
            >
              <ListItemText primary='Portafolios' />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedOption === 'divisiones'}
              onClick={e => this.handleClick(e, 'divisiones')}
            >
              <ListItemText primary='Divisiones' />
            </ListItem>
            {/* <ListItem
              button
              selected={this.state.selectedOption === 'duplicados'}
              onClick={e => this.handleClick(e, 'duplicados')}
            >
              <ListItemText primary='Duplicados' />
            </ListItem> */}
          </List>
        </Grid>
        <Grid item xs>
          <Grid container>
            <Grid item xs={12} md={4} lg={5}>
              {images}
            </Grid>
            <Grid item xs={12} md>
              {colors}
            </Grid>
            <Grid item xs={12}>
              {info}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Portafolios;
