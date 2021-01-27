import Dialogs from "./Dialogs";
import {formAction} from "../../Redux/actions";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;