import styles from "./Post.module.css";
import postImg from "./../../../../resources/img/sec-prof.png";


const Post = ({text, id, likes}) => {

  return (
    <div className={styles.post}>
      <div>
        <img className={styles.post_img} src={postImg} alt="post"/>
      </div>
      <div>
        {text}
      </div>
      <div className={styles.likes}>
        likes: {likes}
      </div>
    </div>
  )
}

export default Post