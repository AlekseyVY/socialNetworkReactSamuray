import User from "./User/User";
import axios from "axios";
import * as React from "react";




class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.users.length === 0){
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
        this.props.setUsers(resp.data.items)
      })
    }
  }


  render() {
    return (
      <div>
        {
          this.props.users.length === 0
            ? "No users"
            : this.props.users.map((user) => {
              return (
                <User key={user.id} user={user} follow={this.props.follow}/>
              )
            })
        }
      </div>
    )
  }
}


export default Users;