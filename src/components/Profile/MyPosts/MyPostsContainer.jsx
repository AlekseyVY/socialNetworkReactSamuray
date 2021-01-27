import React from 'react';
import {formAction} from "../../../Redux/actions";
import MyPosts from "./MyPosts";


const MyPostsContainer = ({posts, newPostText, dispatch}) => {

  const onPostChange = (textAction, text) => {
    dispatch(formAction(textAction, text))
  }

  const addPosts = (buttonAction, textAction, newPostText) => {
    dispatch(formAction(buttonAction, newPostText))
    dispatch(formAction(textAction))
  }


  return (
    <MyPosts posts={posts} newPostText={newPostText} onPostChange={onPostChange} addPosts={addPosts}/>
  )
}

export default MyPostsContainer;