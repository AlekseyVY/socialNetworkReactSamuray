import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Character from "./Character/Character";
import WallPaper from "./Wallpaper/WallPaper";


const Profile = ( {props, addPost, updatePostText} ) => {
    return (
        <>
            <WallPaper/>
            <Character/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={addPost} updatePostText={updatePostText}/>
        </>
    )
}

export default Profile