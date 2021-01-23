import React from 'react';
import mainImg from './../resources/img/red-sun.jpg'
import mainProfImg from './../resources/img/main-prof.jpg'
import postImg from './../resources/img/sec-prof.png'
import styles from './Profile.module.css'


const Profile = () => {

  return (
    <div className={styles.container}>
    <div>
    <img className={styles.main__img} src={mainImg} alt="main" />
    </div>
    <div className={styles.char_info}>
      <div>
        <img className={styles.main_prof_img} src={mainProfImg} alt="Main profile"/>
      </div>
      <div className={styles.description}>
        <h3 className={styles.h3}>Aleksey V.</h3>
        <p className={styles.p}>Date of birth: 2 january</p>
        <p className={styles.p}>City: Volgograd</p>
        <p className={styles.p}>Education: University of People</p>
        <p className={styles.p}>Web site: https://AlekseyVY.tech</p>
      </div>
    </div>
    <div className={styles.create_post}>
      <h3>My posts</h3>
      <div className={styles.create_form}>
        <form className={styles.form}>
          <input className={styles.input} />
          <button className={styles.button}>send</button>
        </form>
      </div>
      <div className={styles.posts_area}>
        <div className={styles.post}>
          <div>
            <img className={styles.post_img} src={postImg} alt="post" />
          </div>
          <div>
            This is first generic post.
          </div>
        </div>
        <div className={styles.post}>
          <div>
            <img className={styles.post_img} src={postImg} alt="post" />
          </div>
          <div>
            This is second generic post
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile