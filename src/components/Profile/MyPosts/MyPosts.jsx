import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import Form from "./Form/Form";


const MyPosts = () => {

    return (
        <>
            <div className={styles.create_post}>
                <h3>My posts</h3>
                <Form />
            </div>
            <div className={styles.post_area}>
                <Post />
                <Post />
            </div>
        </>
    )
}

export default MyPosts;