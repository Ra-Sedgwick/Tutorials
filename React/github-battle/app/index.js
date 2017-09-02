import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
require('./index.css');


let x = 10;
ReactDom.render( 
  <App />,
  document.getElementById('app')
);