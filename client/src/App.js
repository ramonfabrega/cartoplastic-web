import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Home from './components/Home';

// Layout
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Product Pages
import Producto from './components/products/Producto';
import Papeleria from './components/products/Papeleria';

// Info Pages
import Conozcanos from './components/info/Conozcanos';
import FAQ from './components/info/FAQ';
import Pedidos from './components/info/Pedidos';
import Contactenos from './components/info/Contactenos';

// CSS
import './App.css';

// Data Sources
import productosData from './components/products/data/productosData';

export default () => {
  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <div className='App'>
          <Header />
          <Navbar />
          <Route exact path='/' component={Home} />
          {productosData.map(producto => {
            return (
              <Route
                exact
                path={producto.route}
                render={props => <Producto {...props} data={producto} />}
                key={producto.route}
              />
            );
          })}
          <Route exact path='/productos/papeleria' component={Papeleria} />
          <Route exact path='/conozcanos' component={Conozcanos} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/pedidos' component={Pedidos} />
          <Route exact path='/contactenos' component={Contactenos} />
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
};
