import React, { Component } from 'react';
import NextVideo from './NextVideo';

export default class VideoList extends Component{
  render(){
    const {videoListData} = this.props;
    const mainTitle = this.props.mainData.title;
    const filteredList = videoListData.filter(each => (each.title !== mainTitle))
  
    return(
      <div className='videoList'>
        <text className='subheader'>NEXT VIDEO</text>
        {filteredList.map((each, index) => <NextVideo title={each.title}
                                                      channel={each.channel}
                                                      image={each.image}
                                                      id={each.id}
                                                      key={index}
                                                      selectVideo={this.props.selectVideo}/>)}
      </div>
    )
  }
}