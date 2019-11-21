import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.imageSrc} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
