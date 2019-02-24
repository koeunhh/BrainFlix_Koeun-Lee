import React, { Component } from 'react';
import './assets/fonts/stylesheet.css';
import './styles/nav.scss';
import './styles/home.scss';
import './styles/comment.scss';
import './styles/upload.scss';

import Home from './Home';
import Upload from './Upload';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/upload' component={Upload}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
