import styles from "./Character.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";


const Character = () => {

    return (
        <div className={styles.char_info}>
            <Avatar />
            <Description />
        </div>
    )
}

export default Character;