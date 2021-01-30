import Header from "./Header";
import * as React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {fetching, setUserData} from "../../Redux/auth_reducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.fetching()
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then((resp) => {
      if(resp.data.resultCode === 0) {
        let {id, login, email} = resp.data.data
        this.props.setUserData(id, email, login)
      }
      this.props.fetching()
    })
  }

  render(){
    return (
      <Header />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    isFetching: state.authReducer.isFetching,
    userId: state.authReducer.userId,
    login: state.authReducer.login,
    email: state.authReducer.email
  }
}



export default connect(mapStateToProps, {
  fetching,
  setUserData
})(HeaderContainer);