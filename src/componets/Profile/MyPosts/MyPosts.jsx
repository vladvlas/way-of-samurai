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
    props.dispatch({type: 'ADD-POST', text});    NewPostElement.current.value = '';
  }

  const onPostChange = () => {
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT'})
  }

 

 
  

  return (
    <div className={classes.posts}>my posts
      <div>
        <textarea ref={NewPostElement} onChange={onPostChange}></textarea>
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