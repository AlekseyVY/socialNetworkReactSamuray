import User from "./User/User";


const Users = (props) => {

  return (
    <div>
      {
        props.users.map((user) => {
          return (
            <User key={user.id} user={user} follow={props.follow}/>
          )
        })
      }
    </div>
  )
}


export default Users;