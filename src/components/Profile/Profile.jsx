import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";


const Profile = () => {

    return (
        <>
            <WallPaper/>
            <Character/>
            <MyPosts/>
        </>
    )
}

export default Profile