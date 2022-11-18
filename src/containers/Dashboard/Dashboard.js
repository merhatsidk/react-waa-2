import { useEffect, useState } from "react";
import PostDetails from "../../Components/Post/PostDetails/PostDetails";
import Posts from "../Posts/Posts"
import axios from "axios";
import AddPost from "../../Components/AddPost/AddPost";

const Dashboard = () => {
  const [posts, setPosts] = useState([
      { id: 1, title: "News", author: "natty" },
      { id: 2, title: "Sport", author: "mera" },
      { id: 3, title: "News", author: "mike" }
    ]);
  
  const fetchPosts = () => {
    axios.get("http://localhost:8080/api/v1/posts")
    .then(response => {
      setPosts(response.data)
      console.log(posts)
    }).catch(error => {
      console.log(error.message);
    })
  }

  useEffect(()=> {
    fetchPosts()
  },[])

const [postDetail, setPostDetail] = useState('');

   const [newTitle, setNewTitle] = useState('');
    const handleTitleChange = (event) => {
        //console.log(event.target.value)
        setNewTitle(event.target.value);
    }

    
    const changeTitle = () => {
        const copyPosts = [...posts];
        copyPosts[0].title = newTitle;
        setPosts(copyPosts);
    }

    const selectedPost = (id) => {
        setPostDetail(id);
    }

  return (
    <div>
        <Posts posts = {posts} selectedPost = {selectedPost}  />
        <div>
            <input type= "text" onChange={handleTitleChange}></input>    
            
        </div>
        <br /> 
        <div>
          <button type="button" onClick={changeTitle} >Chnage Title</button>
        </div>

      <div>
        <AddPost />
      </div>

        <div>
            <PostDetails postDetail = {postDetail}/>
        </div>


       
    </div>
  )
}

export default Dashboard;