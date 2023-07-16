import React, { useState } from "react";

function index() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <>
      {comments.map((comment) => {
        return <div key={comment.id}>{comment.text}</div>;
      })}
      <button onClick={fetchComments}>load comments</button>
    </>
  );
}

export default index;
