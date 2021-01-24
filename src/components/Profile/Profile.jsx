import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";


const Profile = () => {

  return (
      <div className={styles.container}>
          <WallPaper />
          <Character />
          <MyPosts />
      </div>
  )
}

export default Profile