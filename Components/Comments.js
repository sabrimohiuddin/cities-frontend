import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const API = process.env.REACT_APP_API_URL;

function Comments() {
  const [comments, setComments] = useState(null);
  let { id } = useParams();

  const handleAdd = (newComment) => {
    axios
      .post(`${API}/cities/${id}/comments`, newComment)
      .then((response) => {
        setComments([response.data, ...comments]);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (commentId) => {
    axios
      .delete(`${API}/cities/${id}/comments/${commentId}`)
      .then((response) => {
        const copyCommentArray = [...comments];
        const indexDeletedComment = copyCommentArray.findIndex((comment) => {
          return comment.id === commentId;
        });
        copyCommentArray.splice(indexDeletedComment, 1);
        setComments(copyCommentArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedComment) => {
    axios
      .put(`${API}/cities/${id}/comments/${updatedComment.id}`, updatedComment)
      .then((response) => {
        const copyCommentArray = [...comments];
        const indexUpdatedComment = copyCommentArray.findIndex((comment) => {
          return comment.id === updatedComment.id;
        });
        copyCommentArray[indexUpdatedComment] = response.data;
        setComments(copyCommentArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios.get(`${API}/cities/${id}/comments`).then((response) => {
      if (Array.isArray(response.data)) {
        setComments(response.data);
      } else {
        console.warn("Response data is not an array:", response.data);
      }
    });
  }, [id, API]);

  return (
    <section className="Comments">
      <h2>Comments</h2>
      <CommentForm handleSubmit={handleAdd}>
        <h3>Add a New Comment</h3>
      </CommentForm>
      {comments && comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Comments;