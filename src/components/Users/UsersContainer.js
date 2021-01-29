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


export default connect(mapStateToProps, {
  follow,
  setUsers,
  setPage,
  setUsersCount,
  setIsFetching
})
(UsersAPIComponent)