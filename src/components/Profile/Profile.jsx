import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";


const Profile = ( {data} ) => {

    return (
        <>
            <WallPaper/>
            <Character/>
            <MyPosts posts={data}/>
        </>
    )
}

export default Profile