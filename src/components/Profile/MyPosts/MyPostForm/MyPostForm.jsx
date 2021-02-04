import {Field, reduxForm} from "redux-form";


const MyPostForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field placeholder={'my post...'} name={'myPost'} component={'input'}/>
        <button>submit</button>
      </form>
    </div>
  )
}

const MyPostFormRedux = reduxForm({
    form: 'myPost'
  }
)(MyPostForm)

export default MyPostFormRedux;