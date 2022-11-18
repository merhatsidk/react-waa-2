
import Post from "../../Components/Post/Post";

const Posts = (props) => {
  
  return (
    props.posts.map(post => {
        return(
             <Post key= {post.id} id = {post.id} title = {post.title} author = {post.author} 
              selectedPost = {()=>props.selectedPost(post.id)} /> 
        )
      
    })
  )
}

export default Posts