import React from 'react';
//import styles from './Profile.module.css'
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateStatusThunk}) => {
  return (
    <>
      <WallPaper/>
      <Character profile={profile} status={status} updateStatus={updateStatusThunk}/>
      <MyPostsContainer/>
    </>
  )
}

export default Profile