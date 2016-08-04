import React, { Component } from 'react';
import { Link } from 'react-router';


class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About Page</h2>
        <p><Link to={'/'}>Home</Link></p>
      </div>
    );
  }
}

export default About;
