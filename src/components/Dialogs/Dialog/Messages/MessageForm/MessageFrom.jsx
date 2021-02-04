import {Field, reduxForm} from "redux-form";


const MessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field placeholder={'new message...'} name={'message'} component={'input'}/>
        <button>submit</button>
      </form>
    </div>
  )
}

const MessageFormRedux = reduxForm({
  form: 'message'
})(MessageForm)

export default MessageFormRedux