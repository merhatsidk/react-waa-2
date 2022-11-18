import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostDetails = (props) => {
  const [activePost, setActivePost] = useState('');
  
  useEffect(()=> {
    axios.get("http://localhost:8080/api/v1/posts/" + props.postDetail).then(response => {
      setActivePost(response.data)
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  },[props.postDetail]);

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8080/api/v1/posts/"+ id ).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div>
      <div>
      <h1> {activePost.id}</h1>
      <h2>{activePost.title}</h2>
      <button type='button' onClick={()=>deleteHandler(activePost.id)} >Delete Post</button>
      </div>
        
    </div>
  )
}

export default PostDetails