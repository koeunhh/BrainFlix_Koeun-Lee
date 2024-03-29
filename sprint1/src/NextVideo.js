import React, { Component } from 'react';

export default class NextVideo extends Component{
  render(){
    const {title, channel, image} = this.props;

    return(
      <div className='videoList__next'>
        <img className='videoList__next--img' src={image} alt='nextVideo'/>
        <div className='videoList__next--content'>
          <h3>{title}</h3>
          <p>{channel}</p>
        </div>
      </div>
    )
  }
}