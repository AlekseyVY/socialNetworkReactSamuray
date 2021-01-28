import styles from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = ({state}) => {

  return (
    <div className={styles.logo}>
      <div>
        <h3>Friends:</h3>
      </div>
      <div className={styles.friendsContainer}>
        {
          state.friends.map((ele,id) => {
            return (
              <Friend key={id} state={ele} keyProp={id}/>
              )
          })
        }
      </div>
    </div>
  )
}


export default Friends;