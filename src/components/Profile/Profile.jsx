import React from 'react';
import styles from './Profile.module.css'
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
  return (
    <>
      <WallPaper/>
      <Character/>
      <MyPostsContainer />
    </>
  )
}

export default Profile