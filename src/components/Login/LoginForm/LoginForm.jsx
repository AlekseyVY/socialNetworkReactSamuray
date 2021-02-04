import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import styles from './loginForm.module.css'


const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredField]}/>
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={Input} validate={[requiredField]}/>
        </div>
        <div>
          <Field type={'checkbox'} placeholder={'Checkbox'} name={'rememberMe'} component={'input'}/> Remember me.
        </div>
        {
          props.error
            ? <div className={styles.formError}>
              {props.error}
            </div>
            : ""
        }

        <button>Login</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm;