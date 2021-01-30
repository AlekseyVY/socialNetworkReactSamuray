import styles from "./Avatar.module.css";


const Avatar = ({photo}) => {

  return (
    <div>
      <img className={styles.main_prof_img} src={photo} alt="Main profile"/>
    </div>
  )
}


export default Avatar;