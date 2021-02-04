import * as React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
          <Field type={'checkbox'} placeholder={'Checkbox'} name={'rememberMe'} component={'input'}/> Remember me.
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm;