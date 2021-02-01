import React from 'react';
//import styles from './Profile.module.css'
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = ({profile, isAuth}) => {
  if(!isAuth) {
    return (
      <Redirect to="/login" />
    )
  }

  return (
    <>
      <WallPaper/>
      <Character profile={profile}/>
      <MyPostsContainer/>
    </>
  )
}

export default Profile