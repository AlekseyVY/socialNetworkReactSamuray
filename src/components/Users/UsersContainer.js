import Users from "./Users";
import {connect} from "react-redux";
import {follow, setUsers} from "../../Redux/userReducer";


let mapStateToProps = (state) => {
  return {
    users: state.userReducer.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)