import React from 'react'

import classes from './MyPosts.module.css'
import Post from './Post/Posts';




const MyPosts = (props) => {

  let addPost = postMessage => {

    let newPost = {
      id: 5,
      text: postMessage,
    };
   // debugger; 
    props.posts.push(newPost);
    //console.log(props)
  }

  //console.log(props);
  

  let myPostsElements = props.posts
  .map((post) => <Post id={post.id} message={post.text} key={post.id}/>)

  let NewPostElement = React.createRef();

  const onAddPost = (props) => {
    let text = NewPostElement.current.value;
    addPost(text);
    //console.log(props.state.posts)
  }

  return (
    <div className={classes.posts}>my posts
      <div>
        <textarea ref={NewPostElement}></textarea>
        <button onClick={onAddPost}>Add post</button>
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