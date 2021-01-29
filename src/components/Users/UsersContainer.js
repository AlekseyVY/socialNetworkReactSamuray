import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {follow, setIsFetching, setPage, setUsers, setUsersCount} from "../../Redux/userReducer";


let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    pageSize: state.userReducer.pageSize,
    totalUserCount: state.userReducer.totalUserCount,
    currentPage: state.userReducer.currentPage,
    isFetching: state.userReducer.isFetching
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
    },
    setIsFetching: () => {
      dispatch(setIsFetching())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)