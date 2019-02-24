import React, { Component } from 'react';
import convertToDate from './convertToDate';

export default class Comment extends Component {
  render(){
    const {name, timestamp, comment} = this.props;

    return(
      <div className='target'>
        {/* <img className='target__img' src={image} alt='profilePic'/> */}
        <div className='target__div'>
          <h4 className='target__div--name'>{name}</h4>
          <p className='target__div--date'>{convertToDate(timestamp)}</p>
          <p className='target__div--comment'>{comment}</p>
        </div>
      </div>
    )
  }
}