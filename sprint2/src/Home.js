import React, { Component } from 'react';

import Nav from './Nav';
import Main from './Main';
import Description from './Description';
import CommentSection from './CommentSection';
import VideoList from './VideoList';

import axios from 'axios';

var url = 'https://project-2-api.herokuapp.com/videos?api_key=koeun-lee';
var requestedUrl = 'https://project-2-api.herokuapp.com/videos/';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      videoListData: [],
      mainData: []
    }
  }

  componentDidMount(){
    axios.get(url).then(response => {
      this.setState({
        videoListData: response.data
      });
    });

    const {id} = this.props.match.params;

    axios.get(requestedUrl+id+'?api_key=koeun-lee').then(response => {
      this.setState({
        mainData: response.data
      });
    });
  }

  componentDidUpdate(previous){
    if(previous !== this.props){
      const {id} = this.props.match.params;

      axios.get(requestedUrl+id+'?api_key=koeun-lee').then(response => {
        this.setState({
          mainData: response.data
        });
      });
    }
  }

  selectVideo = (id) => {
    this.props.history.push(`/videos/${id}`);
  }

  render() {
    const {mainData, videoListData} = this.state;

    return (
        <div>
          <Nav />
          <Main mainData={mainData}/>
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