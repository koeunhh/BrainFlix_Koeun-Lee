import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentSection extends Component {
  render() {
    const {comments} = this.props.mainData;

    return(
      <div className="commentSection">
        <text className='subheader'>{comments.length} Comments</text>
        <form className="form">
          <div className="form__image">
            <img className="form__image--img" src='./assets/Images/Mohan-muruge.jpg' alt='profilePic'/>
          </div>
          <div className="form__input">
            <p> JOIN THE CONVERSATION </p>
            <div className="form__input--submit">
              <textarea name="userComment" placeholder="Add a new comment"></textarea>
              <button className="button subheader" type="submit"> COMMENT </button>
            </div>
          </div>
        </form>
        <div className="targetArea">
          {comments.map(each => (
            <Comment image={each.image}
                     name={each.name}
                     timestamp={each.timestamp}
                     comment={each.comment}
                     key={each.id}/>))}
        </div>
      </div>
    )
  }
}