import React, { useState } from 'react';
import CommentForm from "./CommentForm";

function Comment({ comment, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Comment">
      <button onClick={toggleView}> {viewEditForm ? 'See comment' : 'Edit this comment'}</button>

      {viewEditForm ? (
        <CommentForm
          commentDetails={comment}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />

      ) : (
        <div>
          <h4>
            {comment.title}
          </h4>
          <h5>{comment.commenter}</h5>
          <p>{comment.content}</p>
          <button onClick={() => handleDelete(comment.id)}>delete</button>
        </div>
      )}
      
    </div>
  );
}
  
export default Comment;