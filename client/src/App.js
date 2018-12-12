import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Home from './components/Home';

// Layout
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Product Pages
import Portafolios from './components/products/portafolios/Portafolios';
import Folders from './components/products/Folders';
import BindingCases from './components/products/BindingCases';
import Promocionales from './components/products/Promocionales';
import Portadores from './components/products/Portadores';
import Papeleria from './components/products/Papeleria';

// Info Pages
import Conozcanos from './components/info/Conozcanos';
import FAQ from './components/info/FAQ';
import Pedidos from './components/info/Pedidos';
import Contactenos from './components/info/Contactenos';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div className='App'>
            <Header />
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/productos/portafolios'
              component={Portafolios}
            />
            <Route exact path='/productos/folders' component={Folders} />
            <Route
              exact
              path='/productos/bindingcases'
              component={BindingCases}
            />
            <Route
              exact
              path='/productos/promocionales'
              component={Promocionales}
            />
            <Route exact path='/productos/portadores' component={Portadores} />
            <Route exact path='/productos/papeleria' component={Papeleria} />
            <Route exact path='/conozcanos' component={Conozcanos} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/pedidos' component={Pedidos} />
            <Route exact path='/contactenos' component={Contactenos} />
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
