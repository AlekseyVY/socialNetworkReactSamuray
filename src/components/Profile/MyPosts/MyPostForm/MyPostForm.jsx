import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Input} from "../../../common/FormControls/FormsControls";

const postLength = maxLengthCreator(15)

const MyPostForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field name={'myPost'} component={Input} validate={[requiredField, postLength]} placeholder={'new post...'}/>
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