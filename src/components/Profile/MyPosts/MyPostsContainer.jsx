import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {newPost} from "../../../Redux/profileReducer";


let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  }
}


const MyPostsContainer = connect(mapStateToProps, {
  newPost
})(MyPosts)


export default MyPostsContainer;