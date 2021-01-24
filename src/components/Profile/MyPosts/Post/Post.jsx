import styles from "./Post.module.css";
import postImg from "./../../../../resources/img/sec-prof.png";


const Post = () => {

    return (
        <div className={styles.post}>
            <div>
                <img className={styles.post_img} src={postImg} alt="post" />
            </div>
            <div>
                This is first generic post.
            </div>
        </div>
    )
}

export default Post