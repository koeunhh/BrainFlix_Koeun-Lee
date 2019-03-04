import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Upload from './Upload';

class Nav extends Component {
  render(){
    return(
      <nav>
        <div className='logo'>
          <Link to='/'><img src='/assets/Logo/Logo-brainflix.svg' alt="logo"/></Link>
        </div>
        <div className='navMain'>
          <input className="search" type="text" name="search" placeholder="Search" />
          <div className="uploadButton">
            <Link to='/upload'><button><img src="/assets/Icons/SVG/Icon-upload.svg" alt='+'/><span className='subheader'>UPLOAD</span></button></Link>
            <img className="profilePic" src='/assets/Images/Mohan-muruge.jpg' alt="profilePic"/>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;