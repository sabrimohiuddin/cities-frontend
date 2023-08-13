import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentForm(props) {
  let { id } = useParams();
  const { commentDetails } = props;

  const [comment, setComment] = useState({
    commenter: "",
    title: "",
    content: "",
    city_id: id,
  });

  const handleTextChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (commentDetails) {
      setComment(commentDetails);
    }
  }, [id, commentDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(comment, id);
    if (commentDetails) {
      props.toggleView();
    }
    setComment({
      commenter: "",
      title: "",
      content: "",
      city_id: id,
    });
  };

  return (
    
    <form className="form-inline addcomment" action="/action_page.php" onSubmit={handleSubmit}>
    {/* <div className="form-inline form-group">
      {props.children} */}

      <div className="form-group mb-2">
        <label htmlFor="staticName2"
                className="sr-only">Name:</label>
        
        <input   
          id="commenter"
          value={comment.commenter}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required

        />
        </div>

      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={comment.title}
          onChange={handleTextChange}
        />
      </div>
      
        <label htmlFor="content">Note:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={comment.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input className="btn btn-primary mb-2" type="submit" />
    {/* </div> */}
      </form>
  );
}

export default CommentForm;