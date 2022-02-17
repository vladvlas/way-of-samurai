import classes from './Posts.module.css'

const Post = (props) => {



  return (
    <div className={classes.item} id={props.id}>
      <img src="https://tlum.ru/uploads/c2c776f1f20dd128d27ab941c26168c2e866ef6551da751aea7e83ae862a032a.jpeg" alt="" />
      {props.message}
    </div>
  );
}

export default Post;