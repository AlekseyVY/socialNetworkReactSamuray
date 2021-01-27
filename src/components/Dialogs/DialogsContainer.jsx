import Dialogs from "./Dialogs";
import {formAction} from "../../Redux/actions";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const onPostChange = (textAction, text) => {
            store.dispatch(formAction(textAction, text))
          }

          const addPosts = (buttonAction, textAction, newPostText) => {
            store.dispatch(formAction(buttonAction, newPostText))
            store.dispatch(formAction(textAction))
          }
          return (
            <Dialogs onPostChange={onPostChange} addPosts={addPosts} props={store.getState().messageReducer.messagesPage}/>
            )
        }
      }
    </StoreContext.Consumer>

  )
}


export default DialogsContainer;