import React, { Component } from 'react';

import videoListData from './videoListData';
import mainData from './mainData';

import Nav from './Nav';
import Main from './Main';
import Description from './Description';
import CommentSection from './CommentSection';
import VideoList from './VideoList';

import axios from 'axios';

var url = 'https://project-2-api.herokuapp.com/videos?api_key=koeun-lee';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      videoListData: [],
      mainData: mainData
    }
  }

  componentDidMount(){
    axios.get(url).then(response => {
      console.log(response.data);
    })
  }

  render() {
    return (
        <div>
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