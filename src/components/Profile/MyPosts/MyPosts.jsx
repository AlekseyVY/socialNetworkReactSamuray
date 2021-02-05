import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostFormRedux from "./MyPostForm/MyPostForm";


const MyPosts = React.memo( ({posts, newPost}) => {

  const onSubmit = (formData) => {
    newPost(formData.myPost)
  }


  return (
    <>
      <div className={styles.create_post}>
        <h3>My posts</h3>
        <MyPostFormRedux onSubmit={onSubmit}/>
      </div>
      <div className={styles.post_area}>
        {
          posts.map((ele) => {
            return (
              <Post key={ele.id} text={ele.message} id={ele.id} likes={ele.likesCount}/>
            )
          })
        }
      </div>
    </>
  )
})


export default MyPosts;