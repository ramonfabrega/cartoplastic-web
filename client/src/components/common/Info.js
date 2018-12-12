import React, { Component, Fragment } from 'react';
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core';

export default class Info extends Component {
  buildCardHelper = optionsData => {
    return (
      <Fragment>
        <Typography variant='h6' gutterBottom>
          {optionsData.header}
        </Typography>
        {optionsData.sizes.map(size => {
          return (
            <Typography
              variant='body1'
              key={size}
              style={{ marginLeft: 25, marginRight: 25 }}
              gutterBottom
            >
              {size}
            </Typography>
          );
        })}
        <Typography variant='caption'>{optionsData.caption}</Typography>
      </Fragment>
    );
  };

  buildCards = infoData => {
    const cards = [];
    const helperText = this.buildCardHelper(infoData.info);

    for (const [key, value] of Object.entries(infoData.cards)) {
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
                    {value.header.map(h => {
                      return <TableCell key={h}>{h}</TableCell>;
                    })}
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
      <Fragment>
        <Grid item xs={12} sm style={{ marginTop: 25 }}>
          <Grid container spacing={8} justify='center'>
            {cards}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          lg={6}
          style={{ marginTop: 25, paddingLeft: 25, paddingRight: 25 }}
        >
          {helperText}
        </Grid>
      </Fragment>
    );
  };

  buildInfo = infoData => {
    const text = [];

    infoData.info.forEach(infoSet => {
      if (infoSet.header) {
        text.push(
          <Typography variant='h6' gutterBottom key={infoSet.header}>
            {infoSet.header}
          </Typography>
        );
      }

      infoSet.paragraphs.forEach(p => {
        text.push(
          <Typography
            variant='body1'
            gutterBottom
            align='justify'
            key={p}
            style={{ marginLeft: 25, marginRight: 25 }}
          >
            {p}
          </Typography>
        );
      });

      if (infoSet.footer) {
        text.push(
          <Typography variant='caption' key={infoSet.footer}>
            {infoSet.footer}
          </Typography>
        );
      }
    });

    return (
      <Grid item xs={12} sm={9} style={{ marginTop: 25 }}>
        {text}
      </Grid>
    );
  };

  render() {
    const info = this.props.infoData.cards
      ? this.buildCards(this.props.infoData)
      : this.buildInfo(this.props.infoData);

    return (
      <Grid container justify='center'>
        {info}
      </Grid>
    );
  }
}
