import Dialogs from "./Dialogs";
import {formAction} from "../../Redux/actions";


const DialogsContainer = ({ props, dispatch }) => {

  const onPostChange = (textAction, text) => {
    dispatch(formAction(textAction, text))
  }

  const addPosts = (buttonAction, textAction, newPostText) => {
    dispatch(formAction(buttonAction, newPostText))
    dispatch(formAction(textAction))
  }

    return (
      <Dialogs onPostChange={onPostChange} addPosts={addPosts} props={props}/>
    )
}


export default DialogsContainer;