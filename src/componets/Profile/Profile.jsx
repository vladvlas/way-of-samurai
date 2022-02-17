import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {



  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}
         />
    </div>
  );
}

export default Profile;