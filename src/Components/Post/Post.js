import React from 'react'

const Post = (props) => {
//    const onClickHandler = (id) => {
//     console.log(id);
//     }
  return (
    <div className="Content" onClick={props.selectedPost}>
            <h1> {props.title}</h1>
            {/* <h2>{props.selectedPost}</h2> */}
            <div className="Field">
                {props.author}
            </div>
        </div>
  )
}

export default Post