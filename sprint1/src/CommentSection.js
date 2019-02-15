import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentSection extends Component {
  render() {
    const {comments} = this.props.mainData;

    return(
      <div className="commentSection">
        <h3>{comments.length} Comments</h3>
        <form className="form">
          <div className="form__image">
            <img className="form__image--img" src='./assets/Images/Mohan-muruge.jpg' alt='profilePic'/>
          </div>
          <div className="form__input">
            <h5> Join the Conversation </h5>
            <textarea className="form__input--comment" name="userComment" placeholder="Add a new comment"></textarea>
            <button className="button subheader" type="submit"> COMMENT </button>
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