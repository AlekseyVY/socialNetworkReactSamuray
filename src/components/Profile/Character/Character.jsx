import styles from "./Character.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";


const Character = ({profile}) => {
  return (
    <div className={styles.char_info}>
      <Avatar photo={profile.photos.large}/>
      <Description profile={profile}/>
    </div>
  )
}

export default Character;