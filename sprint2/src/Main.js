import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    const { mainData } = this.props;

    return (
      <div className='main'>
        <video poster={mainData.image}>
          <source src={mainData.video} type="video/mp4" />
        </video>
        <div className='controls'>
          <div className='controls__play'>
            <img src='./assets/Icons/SVG/Icon-play.svg'/>
          </div>
          <div className='controls__time'>
            <div className='controls__time--box'></div>
            <div className='controls__time--line'></div>
          </div>
          <div className='controls__settings'>
            <img src='./assets/Icons/SVG/Icon-fullscreen.svg'/>
            <img src='./assets/Icons/SVG/Icon-volume.svg'/>
          </div>
        </div>
      </div>
    )
  }
}