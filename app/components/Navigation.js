import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class NaviBar extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Fox Deck</Link>
        <Link to={'/About'}>About</Link>
        <h4>End of Nav-----</h4>
      </div>

    );
  }
}

export default NaviBar;
