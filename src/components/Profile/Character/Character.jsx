import styles from "./Character.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import mainProfImg from "../../../resources/img/main-prof.jpg";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const Character = ({profile, status, updateStatus}) => {
  return (
    <div>
      <div className={styles.char_info}>
        <Avatar photo={profile.photos.large || mainProfImg}/>
        <Description profile={profile}/>
      </div>
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
}

export default Character;