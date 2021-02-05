import {Redirect} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      console.log(this.props.isAuth)
      if (!this.props.isAuth) {
        return (
          <Redirect to="/login"/>
        )
      }
      return <Component {...this.props}/>
    }
  }
  return connect(mapStateToProps)(RedirectComponent)
}