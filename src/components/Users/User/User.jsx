import styles from './user.module.css'
import avatar from './../../../resources/img/sec-prof.png'
import {NavLink} from "react-router-dom";


const User = ({user, follow}) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={user.photos.small || avatar} alt={'Avatar'}/>
        <button onClick={() => follow(user.id)}>{user.followed === true ? 'unfollow' : 'follow'}</button>
      </div>
      <NavLink className={styles.user_info_container} to={`/profile/${user.id}`}>
          <div className={styles.lesser_container}>
            <div>
              <strong>Full Name:</strong> {user.name}
            </div>
            <div>
              <strong>Status:</strong> {user.status || "No status"}
            </div>
          </div>
      </NavLink>
    </div>
  )
}


export default User;