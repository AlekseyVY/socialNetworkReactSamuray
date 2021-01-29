import Users from "./Users";
import {connect} from "react-redux";
import {follow, setPage, setUsers, setUsersCount} from "../../Redux/userReducer";


let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    pageSize: state.userReducer.pageSize,
    totalUserCount: state.userReducer.totalUserCount,
    currentPage: state.userReducer.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    setPage: (pageNumber) => {
      dispatch(setPage(pageNumber))
    },
    setUsersCount: (totalCount) => {
      dispatch(setUsersCount(totalCount))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)