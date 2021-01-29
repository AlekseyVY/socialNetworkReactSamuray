const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
  profilePage: {
    posts: [
      {id: 1, message: 'This is my first generic post', likesCount: 0},
      {id: 2, message: 'This is my second generic post', likesCount: 45}
    ],
    newPostText: ''
  }
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          posts: [...state.profilePage.posts, newPost],
        }
      }
    }
    case UPDATE_NEW_TEXT: {
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          newPostText: action.data
        }
      }
    }
    default:
      return state;
  }
}


export default profileReducer;