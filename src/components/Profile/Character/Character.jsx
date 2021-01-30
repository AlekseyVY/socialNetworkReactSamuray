import styles from "./Character.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import mainProfImg from "../../../resources/img/main-prof.jpg";

const Character = ({profile}) => {
  return (
    <div className={styles.char_info}>
      <Avatar photo={profile.photos ? profile.photos.large : mainProfImg}/>
      <Description profile={profile}/>
    </div>
  )
}

export default Character;