import React, { Component } from 'react';
import convertToDate from './convertToDate';

export default class Description extends Component{
  render(){
    const {mainData} = this.props;

    return(
      <div className='description'>
        <h1 className='description__title'>{mainData.title}</h1>
        <div className='descriotion__info'>
          <h3>{mainData.channel}</h3>
          <h3 className='description__info--date'>{convertToDate(mainData.timestamp)}</h3>
        </div>
        <div className='description__viewsLikes'>
          <img src='./assets/Icons/SVG/Icon-views.svg' alt='views'/>
          <h3>{mainData.views}</h3>
          <img src='./assets/Icons/SVG/Icon-likes.svg' alt='likes'/>
          <h3>{mainData.likes}</h3>
        </div>
        <p>{mainData.description}</p>
      </div>
    )
  }
}