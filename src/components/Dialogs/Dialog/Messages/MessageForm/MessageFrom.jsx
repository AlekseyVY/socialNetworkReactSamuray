import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/FormControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";

const messageLength = maxLengthCreator(30)

const MessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field placeholder={'new message...'} name={'message'} component={Input} validate={[requiredField, messageLength]}/>
        <button>submit</button>
      </form>
    </div>
  )
}

const MessageFormRedux = reduxForm({
  form: 'message'
})(MessageForm)

export default MessageFormRedux