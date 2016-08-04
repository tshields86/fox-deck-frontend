import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Fox Deck</h1>
        <p>A quick and simple way for entrepreneurs to generate financial projections for their business ideas.</p>
        <p><Link to={'/About'}>Learn more</Link></p>
      </div>
    );
  }
}

export default Welcome;
