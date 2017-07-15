import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Topics from './Topics';
import App from './App';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/Home' component={Home} />
        <Route path='/Topics' component={Topics} />
        <Route path='/About' component={About} />
      </div>
  </Router>,
   document.getElementById('root')
 );
