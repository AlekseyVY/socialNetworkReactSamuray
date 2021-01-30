import styles from './user.module.css'
import avatar from './../../../resources/img/main-prof.jpg'
import {NavLink} from "react-router-dom";


const User = ({user, followU, unFollowU, followingProcess}) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={user.photos.small || avatar} alt={'Avatar'}/>
        {
          user.followed
            ? <button disabled={followingProcess.some((id) => id === user.id)} className={styles.activePage} onClick={() => unFollowU(user.id)
            }>
              {'unfollow'}
            </button>
            : <button disabled={followingProcess.some((id) => id === user.id)} className={styles.notActivePage} onClick={() => followU(user.id)
            }>
              {'follow'}
            </button>
        }
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