import React, { Component } from 'react';
import './styles/style.scss';
import logo from './assets/Logo/Logo-brainflix.svg';
import profilePic from './assets/Images/Mohan-muruge.jpg';


class Nav extends Component {
  render(){
    return(
      <nav>
        <img className="logo" src={logo} alt="logo"/>
        <input className="search" type="text" name="search" placeholder="Search" />
        <button>UPLOAD</button>
        <img className="profilePic" src={profilePic} alt="profilePic"/>
      </nav>
    )
  }
}

export default Nav;