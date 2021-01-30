import React from 'react';
//import styles from './Profile.module.css'
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile}) => {
  return (
    <>
      <WallPaper/>
      <Character profile={profile}/>
      <MyPostsContainer/>
    </>
  )
}

export default Profile