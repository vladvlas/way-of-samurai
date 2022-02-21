import React from 'react'

import classes from './MyPosts.module.css'
import Post from './Post/Posts';
// import { addPost } from '../../../redux/state';




const MyPosts = (props) => {
  

  let myPostsElements = props.posts
  .map((post) => <Post id={post.id} message={post.text} key={post.id}/>)

  let NewPostElement = React.createRef();

  const addPost = () => {
    let text = NewPostElement.current.value;
    props.addPost(text);
    NewPostElement.current.value = '';
  }

 

 
  

  return (
    <div className={classes.posts}>my posts
      <div>
        <textarea ref={NewPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.item}>
        {
          myPostsElements
        }
      </div>
    </div>
  );
}

export default MyPosts;