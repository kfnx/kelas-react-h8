import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Calculator/';
import App from './components/ClickState/';
import CssBaseline from '@material-ui/core/CssBaseline';
// import './components/Calculator/style.css'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <App/>
    </React.Fragment>,
    document.getElementById('root')
  );