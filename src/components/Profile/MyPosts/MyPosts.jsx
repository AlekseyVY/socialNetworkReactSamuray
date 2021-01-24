import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import Form from "./Form/Form";


const MyPosts = () => {

    const posts = [
        {id: 1, message: 'This is my first generic post', likesCount: 0},
        {id: 2, message: 'This is my second generic post', likesCount: 45}
    ]

    return (
        <>
            <div className={styles.create_post}>
                <h3>My posts</h3>
                <Form />
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