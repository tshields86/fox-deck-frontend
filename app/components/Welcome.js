import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Fox Deck</h1>
          <p>A quick and simple way for entrepreneurs to generate financial projections for their business ideas.</p>
          <p><Button bsStyle="primary"><Link to={'/About'}>Learn more</Link></Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default Welcome;
