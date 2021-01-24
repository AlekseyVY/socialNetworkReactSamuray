import styles from "./Avatar.module.css";
import mainProfImg from "../../../../resources/img/main-prof.jpg";


const Avatar = () => {

    return (
        <div>
            <img className={styles.main_prof_img} src={mainProfImg} alt="Main profile"/>
        </div>
    )
}


export default Avatar;