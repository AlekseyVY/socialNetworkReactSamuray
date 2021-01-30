import styles from './user.module.css'
import avatar from './../../../resources/img/sec-prof.png'
import {NavLink} from "react-router-dom";
import axios from "axios";


const User = ({user, follow}) => {
  console.log(user.followed)
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={user.photos.small || avatar} alt={'Avatar'}/>
        {
          user.followed
          ? <button onClick={() => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                {
                  withCredentials: true,
                  headers: {
                    'API-KEY': "9e0ae487-73ea-4784-9bfc-7104c0689bd4"
                  }
                })
              .then((resp) => {
                if(resp.data.resultCode === 0) {
                  follow(user.id)
                }
              })
            }
          }>
              {user.followed === true ? 'unfollow' : 'follow'}
          </button>
            : <button onClick={ () => {
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},
                {
                  withCredentials: true,
                  headers: {
                    'API-KEY': "9e0ae487-73ea-4784-9bfc-7104c0689bd4"
                  }
                })
              .then((resp) => {
                if(resp.data.resultCode === 0) {
                  follow(user.id)
                }
              })
            }
            }>
              {user.followed === true ? 'unfollow' : 'follow'}
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