import React, { Component } from 'react';

export default class Main extends Component{ 
  render(){
    const {mainData} = this.props;

    return(
      <video controls poster={mainData.image}>
        <source src={mainData.video} type="video/mp4"/>
      </video>
    )
  }
}