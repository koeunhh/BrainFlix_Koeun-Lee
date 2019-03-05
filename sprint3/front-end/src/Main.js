import React, { Component } from 'react';

export default class Main extends Component {

  render() {
    const { mainData } = this.props;

    return (
      <div className='main'>
        <video id='myVideo' poster={mainData[0].image}>
          <source src={mainData[0].video} type="video/mp4" />
        </video>
        <div className='controls'>
          <button className='controls__play' onClick={event => this.props.playPause()}>
            <img src='/assets/Icons/SVG/Icon-play.svg' alt='icon-play'/>
          </button>
          <div className='controls__time'>
            <div className='controls__time--box'></div>
            <div className='controls__time--line'></div>
          </div>
          <div className='controls__settings'>
            <button onClick={event => this.props.fullscreen()} className='controls__settings--fullscreen'><img src='/assets/Icons/SVG/Icon-fullscreen.svg' alt='icon-fullscreen'/></button>
            <button className='controls__settings--volume'><img src='/assets/Icons/SVG/Icon-volume.svg' alt='icon-volume'/></button>
          </div>
        </div>
      </div>
    )
  }
}