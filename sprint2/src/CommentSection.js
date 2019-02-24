import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentSection extends Component {
  render() {
    const {comments} = this.props.mainData;

    return(
      <div className="commentSection">
        {/* <text className='subheader'> Comments</text> */}
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
          {/* {Object.keys(comments).map((each, index) => (
            <Comment key={index}
                     name={comments[each].name}
                     timestamp={comments[each].timestamp}
                     comment={comments[each].comment}
                     />))} */}
          {comments.map((each, index) => (
            <Comment key={index}
                     name={each.name}
                     timestamp={each.timestamp}
                     comment={each.comment}
                     />))}
        </div>
      </div>
    )
  }
}