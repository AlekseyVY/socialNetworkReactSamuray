import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import Form from "../../Form/Form";


const MyPosts = ({ posts, newPostText, onPostChange, addPosts }) => {
    return (
        <>
            <div className={styles.create_post}>
                <h3>My posts</h3>
                <Form buttonAction={'ADD-POST'} onPostChange={onPostChange} newPostText={newPostText} addPosts={addPosts} textAction={'UPDATE-NEW-TEXT'}/>
            </div>
            <div className={styles.post_area}>
                {
                    posts.map((ele) => {
                        return (
                            <Post text={ele.message} id={ele.id} likes={ele.likesCount}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MyPosts;