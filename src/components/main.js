'use strict';

var GeneratorReactWebpackApp = require('./GeneratorReactWebpackApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GeneratorReactWebpackApp}>
    <Route name="/" handler={GeneratorReactWebpackApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
