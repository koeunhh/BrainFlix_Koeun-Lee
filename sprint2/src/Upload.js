import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default class Upload extends Component{
  render(){
    return(
      <>
        <Nav />
        <div className='upload'>
          <h1>Upload Video</h1>
          <form>
            <div className='form-main'>
              <div className='form-main-img'>
                <h5 className='thumbnail'>VIDEO THUMBNAIL</h5>
                <img src='assets/Images/upload-video-preview.jpg' alt='upload-preview'/>
              </div>
              <div className='form-main-detail'>
                <h5 className='title'>TITLE YOUR VIDEO</h5>
                <textarea className='title--text' name='title' placeholder='Add a title to your video'></textarea>
                <h5 className='description'>ADD A VIDEO DESCRIPTION</h5>
                <textarea className='description--text' name='description' placeholder='Add a description of your video'></textarea>
              </div>
            </div>
            <div className='form-submit'>
              <input className='publish subheader' type='submit' value='PUBLISH'></input>
              <Link to='/'><button className='cancel subheader'>CANCEL</button></Link>
            </div>
            </form>
        </div>
      </>
    )
  }
}