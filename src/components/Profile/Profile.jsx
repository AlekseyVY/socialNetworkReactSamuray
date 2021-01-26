import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";


const Profile = ( {props, dispatch} ) => {
    return (
        <>
            <WallPaper/>
            <Character/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={dispatch} />
        </>
    )
}

export default Profile