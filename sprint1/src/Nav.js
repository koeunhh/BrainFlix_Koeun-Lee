import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return(
      <nav>
        <div className='logo'>
          <img src='./assets/Logo/Logo-brainflix.svg' alt="logo"/>
        </div>
        <input className="search" type="text" name="search" placeholder="Search" />
        <button>UPLOAD</button>
        <img className="profilePic" src='./assets/Images/Mohan-muruge.jpg' alt="profilePic"/>
      </nav>
    )
  }
}

export default Nav;