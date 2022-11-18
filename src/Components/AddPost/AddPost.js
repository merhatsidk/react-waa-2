import axios from 'axios';
import React, { useRef } from 'react'

function AddPost() {
    const newPostForm = useRef();

    const postHandler = () => {

        const formPost = newPostForm.current;

        const data = {
            title : formPost['title'].value,
            author : formPost['author'].value,
            content : formPost['content'].value
        }

        axios.post("http://localhost:8080/api/v1/posts/", data).then(
            response => {
                console.log(response)
            }
        ).catch(err => {
            console.log(err)
        })

    }




  return (
     <div className="NewProduct">
         <form ref={newPostForm}>

                <h1>Add a Post</h1>

                <label>Title</label>
                <input type="text"
                    label={'title'}
                    name={'title'}
                />

                <label>Author</label>
                <input  type="text"
                    label={'author'}
                    name={'author'}
                />

                <label>Content</label>
                <input  type="text"
                    label={'content'}
                    name={'content'}
                />



                </form>
                <button onClick={postHandler}>Add Post </button>
        </div>
  )
}

export default AddPost