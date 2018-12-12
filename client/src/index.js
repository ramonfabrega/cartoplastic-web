import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const themeName = 'Monza Sunshade Trogon';

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: '#d70013' },
      secondary: { main: '#FFA726' }
    },
    typography: {
      useNextVariants: true
    }
  },
  themeName
);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
