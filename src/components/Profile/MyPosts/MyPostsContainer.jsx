import {formAction} from "../../../Redux/actions";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;