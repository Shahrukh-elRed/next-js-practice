import styles from "@/styles/Home.module.css";
import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response?.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Comment
      </button>
      <button className="btn btn-primary" onClick={fetchComments}>
        Load Comments
      </button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
          <button
            className="btn btn-primary"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;
