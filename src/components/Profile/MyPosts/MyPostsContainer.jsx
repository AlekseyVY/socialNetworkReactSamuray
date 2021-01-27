import React from 'react';
import {formAction} from "../../../Redux/actions";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().profileReducer.profilePage

          const onPostChange = (textAction, text) => {
            store.dispatch(formAction(textAction, text))
          }

          const addPosts = (buttonAction, textAction, newPostText) => {
            store.dispatch(formAction(buttonAction, newPostText))
            store.dispatch(formAction(textAction))
          }
          return (
            <MyPosts posts={state.posts}
                     newPostText={state.newPostText}
                     onPostChange={onPostChange}
                     addPosts={addPosts}/>
            )
        }
      }
    </StoreContext.Consumer>

  )
}

export default MyPostsContainer;