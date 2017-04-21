import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../../containers/HomeContainer';
import About from '../../containers/AboutContainer';
import Articles from '../../containers/ArticlesContainer';

import './App.css';


const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/articles" component={Articles}/>
    </div>
  </Router>
);

export default App;
