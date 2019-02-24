import React, { Component } from 'react';
import convertToDate from './convertToDate';

export default class Description extends Component{
  render(){
    const {mainData} = this.props;


    return(
      <div className='description'>
        <h1 className='description__title'>{mainData.title}</h1>
        <div className='description__info'>
          <h2 className='subheader'>By {mainData.channel}</h2>
          <p className='description__info--date'>{convertToDate(mainData.timestamp)}</p>
        </div>
        <div className='description__viewsLikes'>
          <div>
            <img src='/assets/Icons/SVG/Icon-views.svg' alt='views'/>
            <p>{mainData.views}</p>
          </div>
          <div>
            <img src='/assets/Icons/SVG/Icon-likes.svg' alt='likes'/>
            <p>{mainData.likes}</p>
          </div>
        </div>
        <p className='paragraph'>{mainData.description}</p>
      </div>
    )
  }
}