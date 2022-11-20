import React, { useContext } from "react";
import { FetchPostContext } from "../../containers/Dashboard/Dashboard";


function Post(props) {
  const idFunctionContext = useContext(FetchPostContext);
  return (
    <div
      style={{ margin: "1.5em" }}
      onClick={() => idFunctionContext(props.id)}
    >
      <p>Id : {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
    </div>
  );
}

export default Post;