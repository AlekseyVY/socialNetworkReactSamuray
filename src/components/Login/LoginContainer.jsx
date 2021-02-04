import * as React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../Redux/auth_reducer";


const LoginContainer =(props) => {

  const onSubmit = (formData) => {
    props.loginThunk(formData.login, formData.password, formData.rememberMe)
    console.log(formData)
    console.log(props)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

let mapStateToProps = (props) => {
  return {
    login: props.authReducer.login,
    password: props.authReducer.password,
    rememberMe: props.authReducer.rememberMe,
  }
}


export default connect(mapStateToProps, {
  loginThunk
})(LoginContainer);