import User from "./User/User";
import axios from "axios";


const Users = (props) => {

  const getUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
      props.setUsers(resp.data.items)
    })
  }


  return (
    <div>
      {
        props.users.length === 0
          ? <button onClick={getUsers}>Get Users</button>
          : props.users.map((user) => {
          return (
            <User key={user.id} user={user} follow={props.follow}/>
          )
        })
      }
    </div>
  )
}


export default Users;