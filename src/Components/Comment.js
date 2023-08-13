import React, { useState } from 'react';
import CommentForm from "./CommentForm";

function Comment({ comment, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    // <div className="Comment">

    //   {viewEditForm ? (
    //     <CommentForm
    //     commentDetails={comment}
    //     toggleView={toggleView}
    //     handleSubmit={handleSubmit}
    //     />
        
    //     ) : (
    //       <div>
    //       <h4>
    //         {comment.commenter}
    //       </h4>
    //       <h5>{comment.title}</h5>
    //       <p>{comment.content}</p>
    //       <button onClick={() => handleDelete(comment.id)}>Delete this comment</button>
    //       <button onClick={toggleView}> {viewEditForm ? 'See comment' : 'Edit this comment'}</button>
    //     </div>
    //   )}
      
    // </div>

    

<div className="container mt-5">

{viewEditForm ? (
         <CommentForm
         commentDetails={comment}
         toggleView={toggleView}
         handleSubmit={handleSubmit}
         />
        
         ):(

<div className="row  d-flex justify-content-center">

  <div className="col-md-8">

      {/* <div className="headings d-flex justify-content-between align-items-center mb-3">
          <h5>Unread comments(6)</h5>

          //So hum... we might need to work on that, but this part is optional
          
      </div> */}



    <div className="card p-3">

      <div className="d-flex justify-content-between align-items-center">
        <div className="user d-flex flex-row align-items-center">
          <span><small className="font-weight-bold text-primary">{comment.commenter}</small> <small className="font-weight-bold">{comment.content}</small></span>  
        </div>
      <small style={{color: 'green', fontSize: '18px', fontWeight:'bold'}}>{comment.title}</small>
      </div>


      <div className="action d-flex justify-content-between mt-2 align-items-center">
        <div className="remove-edit">
            <small onClick={() => handleDelete(comment.id)}> Remove</small>
            <span className="dots"></span>
            <small onClick={toggleView}>Edit</small>
        </div>   
      </div>

    </div>

  </div>
    
</div>)}
         
</div>
  );
}
  
export default Comment;

