import React from 'react';
import styles from './Profile.module.css'
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ( {props, dispatch} ) => {
    return (
        <>
            <WallPaper/>
            <Character/>
            <MyPostsContainer posts={props.posts} newPostText={props.newPostText} dispatch={dispatch} />
        </>
    )
}

export default Profile