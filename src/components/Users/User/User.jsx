import styles from './user.module.css'
import avatar from './../../../resources/img/sec-prof.png'


const User = ({user, follow}) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={user.photos.small || avatar} alt={'Avatar'}/>
        <button onClick={() => follow(user.id)}>{user.followed === true ? 'unfollow' : 'follow'}</button>
      </div>
      <div className={styles.user_info_container}>
        <div className={styles.lesser_container}>
          <div>
            <strong>Full Name:</strong> {user.name}
          </div>
          <div>
            <strong>Status:</strong> {user.status || "No status"}
          </div>
        </div>
      </div>
    </div>
  )
}


export default User;