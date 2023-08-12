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

<div className="row  d-flex justify-content-center">

    <div className="col-md-8">

        {/* <div className="headings d-flex justify-content-between align-items-center mb-3">
            <h5>Unread comments(6)</h5>

            //So hum... we might need to work on that, but this part is optional
            
        </div> */}



        <div className="card p-3">

            <div className="d-flex justify-content-between align-items-center">

          <div className="user d-flex flex-row align-items-center">

            
            <span><small className="font-weight-bold text-primary">james_olesenn</small> <small className="font-weight-bold">Hmm, This poster looks cool</small></span>
              
          </div>


          </div>


          <div className="action d-flex justify-content-between mt-2 align-items-center">

            <div className="reply px-4">
                <small>Remove</small>
                <span className="dots"></span>
                <small>Edit</small>
               
               
            </div>

            <div className="icons align-items-center">

                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-check-circle-o check-icon"></i>
                
            </div>
              
          </div>


            
        </div>



        
    </div>
    
</div>

</div>



  );
}
  
export default Comment;