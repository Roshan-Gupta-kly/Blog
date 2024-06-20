import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate()
  const {
    Data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() => {
        navigate(-1)
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p><b>Author: {blog.author}</b></p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
