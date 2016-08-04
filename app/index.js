import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

// App Styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  routes,
  document.getElementById('react-app')
);
