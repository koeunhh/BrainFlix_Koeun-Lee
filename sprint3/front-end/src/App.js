import React, { Component } from 'react';
import './assets/fonts/stylesheet.css';
import './styles/nav.scss';
import './styles/home.scss';
import './styles/comment.scss';
import './styles/upload.scss';

import Home from './Home';
import Upload from './Upload';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
class App extends Component {

  uploadVideo = (event) => {
    event.preventDefault();
    axios.post('https://koeun-cors-anywhere.herokuapp.com/https://brainflix-koeun.herokuapp.com/videos', 
      { title: event.target.title.value,
        description: event.target.description.value
      })
      .then(res => {
        window.location.href = '/videos/1af0jruup5gu'
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from='/' to='/videos/1af0jruup5gu'/>
            <Route path='/videos/:id' component={Home}/>
            <Route path='/upload' render={(props) => {return <Upload {...props} uploadVideo={this.uploadVideo}/>}}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
