import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App style="margin: '0', padding: '0', fontFamily: 'sans-serif'"/>,
  document.getElementById('app')
);

module.hot.accept();
