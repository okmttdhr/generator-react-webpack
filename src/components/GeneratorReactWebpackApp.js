'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/css/main.css');

var imageURL = require('../images/yeoman.png');

var GeneratorReactWebpackApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <p className="test_p">Test</p>
        <p className="test_p">Test</p>
        <p className="test_p">Test</p>
      </div>
    );
  }
});

module.exports = GeneratorReactWebpackApp;
