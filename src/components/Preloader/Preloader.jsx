import styles from "./preloader.module.css";
import userLoader from "../../resources/loaders/Bean Eater.gif";


const Preloader = () => {
  return (
    <img className={styles.loader} src={userLoader} alt={'loader'}/>
  )
}


export default Preloader;