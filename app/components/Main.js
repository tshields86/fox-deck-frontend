import React, { Component } from 'react';
import Navigation from 'Navigation';


const Main = React.createClass({

  render: function () {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
});

export default Main;
