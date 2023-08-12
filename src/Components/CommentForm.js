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
    <div className="Edit">
      {props.children}
      <form className="form-inline" action="/action_page.php" onSubmit={handleSubmit}>
        <label htmlFor="commenter">Name:</label>
        <input
          id="commenter"
          value={comment.commenter}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={comment.title}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Comment:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={comment.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default CommentForm;