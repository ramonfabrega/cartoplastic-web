import React, { Component } from 'react';
import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Icon,
  Button,
  Snackbar,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios';

import location from '../images/location.png';

const selectOpts = [
  'Multiples productos',
  'Portafolios, duplicados, y divisiones',
  'Folders expansibles',
  'Letter files',
  'Binding cases',
  'Productos promocionales',
  'Cubiertas y estuches',
  'Papelería',
  'Otros'
];

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2,
    // marginTop: theme.spacing.unit * 5,
    // marginBottom: theme.spacing.unit * 5,
    margin: theme.spacing.unit * 3
  },
  rightIcon: {
    marginLeft: theme.spacing.unit * 2
  },
  button: {
    paddingRight: theme.spacing.unit
  }
});

class Contactenos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      phone: '',
      fax: '',
      email: '',
      interest: '',
      message: '',
      open: false
    };
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleClick = () => {
    const email = this.buildEmail();

    axios
      .post('/contact', {
        message: email
      })
      .then(res => {
        this.setState({
          name: '',
          company: '',
          phone: '',
          fax: '',
          email: '',
          interest: '',
          message: '',
          open: true
        });
      })
      .catch(err => console.log(err));
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  buildEmail = () => {
    const { name, company, phone, email, interest, message, fax } = this.state;

    return `
      Compañia: ${company}
      Nombre: ${name}
      Tel: ${phone}
      Email: ${email}
      Fax: ${fax}
      Interes: ${interest}

      Mensaje: 
      ${message}
      `;
  };

  render() {
    const { classes } = this.props;

    const { name, company, phone, email, interest, message } = this.state;
    const canSubmit = name && company && phone && email && interest && message;

    return (
      <Grid container>
        <Grid item md>
          <img src={location} alt='' style={{ width: '70%', marginTop: 20 }} />
        </Grid>
        <Grid item md>
          <Grid container style={{ marginTop: 20 }} alignItems='center'>
            <Grid item md={8}>
              <Typography variant='h2'>Contáctenos</Typography>
            </Grid>
            <Grid item md={4}>
              <Button
                className={classes.button}
                disabled={!canSubmit}
                variant='contained'
                color='primary'
                size='large'
                onClick={this.handleClick}
              >
                Enviar
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                open={this.state.open}
                autoHideDuration={5000}
                onClose={this.handleClose}
                message={<span id='message-id'>Mensaje enviado</span>}
                action={[
                  <IconButton
                    key='close'
                    color='inherit'
                    className={classes.close}
                    onClick={this.handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </Grid>
          </Grid>
          <Paper className={classes.paper}>
            <form noValidate autoComplete='off'>
              <Grid container spacing={16}>
                <Grid item md={6}>
                  <TextField
                    required
                    label='Empresa'
                    value={this.state.company}
                    onChange={this.handleChange('company')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    label='Nombre completo'
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    label='Teléfono'
                    value={this.state.phone}
                    onChange={this.handleChange('phone')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label='Fax'
                    value={this.state.fax}
                    onChange={this.handleChange('fax')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    label='Correo electrónico'
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    select
                    required
                    label='Linea de interes'
                    value={this.state.interest}
                    onChange={this.handleChange('interest')}
                    className={classes.textField}
                    margin='normal'
                    align='left'
                  >
                    {selectOpts.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={12}>
                  <TextField
                    required
                    multiline
                    rows='4'
                    label='Escriba su mensaje'
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                    className={classes.textField}
                    margin='normal'
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Contactenos);
