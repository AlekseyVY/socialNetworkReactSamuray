import Dialogs from "./Dialogs";
import {formAction} from "../../Redux/actions";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    props: state.messageReducer.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (textAction, text) => {
      dispatch(formAction(textAction, text))
    },
    addPosts: (buttonAction, textAction, newPostText) => {
      dispatch(formAction(buttonAction, newPostText))
      dispatch(formAction(textAction))
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);