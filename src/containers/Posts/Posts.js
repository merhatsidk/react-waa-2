import React from "react";
import Post from "../../Components/Post/Post";

import "./Posts.css";

function Posts({ data }) {
  return (
    <div className="details">
      {data.map((post) => {
        return (
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            key={post.id}
          />
        );
      })}
    </div>
  );
}

export default Posts;