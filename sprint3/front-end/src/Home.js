import React, { Component } from 'react';

import Nav from './Nav';
import Main from './Main';
import Description from './Description';
import CommentSection from './CommentSection';
import VideoList from './VideoList';

import axios from 'axios';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      videoListData: [],
      mainData: [],
      isPlaying: false,
      fullscreen: false
    }
    this.selectVideo = this.selectVideo.bind(this);
  }

  componentDidMount(){
    axios.get('http://brainflix-koeun.herokuapp.com/videos').then(response => {
      this.setState({
        videoListData: response.data
      });
    });

    const {id} = this.props.match.params;

    axios.get(`http://brainflix-koeun.herokuapp.com/videos/${id}`).then(response => {
      this.setState({
        mainData: response.data
      });
    });
  }

  componentDidUpdate(previous){
    if(previous !== this.props){
      const {id} = this.props.match.params;

      axios.get(`http://brainflix-koeun.herokuapp.com/videos/${id}`).then(response => {
        this.setState({
          mainData: response.data
        });
      });
    }
  }

  // selectVideo = (id) => {
  //   this.props.history.push(`/videos/${id}`);
  // }

  selectVideo(id) {
    this.props.history.push(`/videos/${id}`);
  }

  playPause = () => {
    var vid = document.getElementById("myVideo"); 
    if(this.state.isPlaying){
      vid.pause();
      this.setState({
        isPlaying: false
      })
    }
    else{
      vid.play();
      this.setState({
        isPlaying: true
      })
    }
  }

  fullscreen = () => {
    var vid = document.getElementById("myVideo"); 
    vid.requestFullscreen();
  }

  render() {
    const {mainData, videoListData} = this.state;
    
    if(mainData.length === 0){
      return null;
    }

    return (
        <div>
          <Nav />
          <Main mainData={mainData} playPause={this.playPause} fullscreen={this.fullscreen}/>
          <div className='content'>
            <div className='detail'>
              <Description mainData={mainData}/>
              <CommentSection mainData={mainData}/>
            </div>
            <VideoList videoListData={videoListData}
                       mainData={mainData}
                       selectVideo={this.selectVideo}/>
          </div>
        </div>
    );
  }
}