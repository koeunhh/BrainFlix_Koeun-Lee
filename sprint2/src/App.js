import React, { Component } from 'react';
import './assets/fonts/stylesheet.css';
import './styles/nav.scss';
import './styles/home.scss';
import './styles/comment.scss';
import './styles/upload.scss';

import Home from './Home';
import Upload from './Upload';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from='/' to='videos/1af0jruup5gu'/>
            <Route path='/videos/:id'component={Home}/>
            <Route path='/upload' component={Upload}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
