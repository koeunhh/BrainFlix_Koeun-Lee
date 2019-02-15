import React, { Component } from 'react';
import NextVideo from './NextVideo';

export default class VideoList extends Component{
  render(){
    const {videoListData} = this.props;
    const mainTitle = this.props.mainData.title;
    const filteredList = videoListData.filter(each => (each.title !== mainTitle))

    return(
      <div className='videoList'>
        <h4>NEXT VIDEO</h4>
        {filteredList.map(each => <NextVideo title={each.title}
                                              channel={each.channel}
                                              image={each.image}/>)}
      </div>
    )
  }
}