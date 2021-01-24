import styles from "./WallPaper.module.css";
import mainImg from "../../../resources/img/red-sun.jpg";


const WallPaper = () => {

    return (
        <div>
            <img className={styles.main__img} src={mainImg} alt="main" />
        </div>
    )
}


export default WallPaper;