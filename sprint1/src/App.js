import React, { Component } from 'react';
import './assets/fonts/stylesheet.css';
import './styles/style.scss';
import './styles/comment.scss';

import videoListData from './videoListData';
import mainData from './mainData';

import Nav from './Nav';
import Main from './Main';
import Description from './Description';
import CommentSection from './CommentSection';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videoListData: videoListData,
    mainData: mainData
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main mainData={this.state.mainData}/>
        <div className='content'>
          <div className='detail'>
            <Description mainData={this.state.mainData}/>
            <CommentSection mainData={this.state.mainData}/>
          </div>
          <VideoList videoListData={this.state.videoListData}
                     mainData={this.state.mainData}/>
        </div>
      </div>
    );
  }
}

export default App;
