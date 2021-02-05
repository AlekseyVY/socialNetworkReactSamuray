import Header from "./Header";
import * as React from "react";
import {connect} from "react-redux";
import {authTHunk, logoutThunk} from "../../Redux/auth_reducer";



class HeaderContainer extends React.Component {


  render(){
    return (
      <Header  isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutThunk}/>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
  }
}



export default connect(mapStateToProps, {
  logoutThunk
})(HeaderContainer);