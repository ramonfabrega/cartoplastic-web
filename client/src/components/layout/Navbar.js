import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { productos } from '../common/metadata';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      loc: ''
    };
  }

  componentDidMount() {
    const pathname = window.location.pathname.split('/');

    if (pathname[1] === 'productos') {
      this.setState({ value: pathname[2], loc: pathname[1] });
    }
  }

  componentDidUpdate() {
    const pathname = window.location.pathname.split('/');
    const path = pathname[1];

    if (path !== this.state.loc) {
      if (path === 'productos') {
        this.setState({ value: pathname[2], loc: path });
      } else {
        this.setState({ value: false, loc: path });
      }
    }
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  createTabs = () => {
    const pages = [];

    productos.forEach(producto => {
      pages.push(
        <Tab
          key={producto.value}
          value={producto.value}
          label={producto.label}
          to={`/productos/${producto.value}`}
          component={Link}
        />
      );
    });

    return pages;
  };

  render() {
    const pages = this.createTabs();

    return (
      <Paper>
        <Tabs
          scrollable
          scrollButtons='auto'
          value={this.state.value}
          indicatorColor='primary'
          textColor='primary'
          onChange={this.handleChange}
        >
          {pages}
        </Tabs>
      </Paper>
    );
  }
}
