import React, { Component } from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import App from './App';

class routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component ={App}>
              <IndexRoute component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Topics" component={Topics}/>
          </Route>
      </Router>
    );
  }
}

export default routes;
