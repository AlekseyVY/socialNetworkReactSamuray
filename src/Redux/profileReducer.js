const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_ISFETCHING = 'SET_ISFETCHING';
const SET_USER_ID = 'SET_USER_ID';

let initialState = {
  posts: [
    {id: 1, message: 'This is my first generic post', likesCount: 0},
    {id: 2, message: 'This is my second generic post', likesCount: 45}
  ],
  newPostText: '',
  profile: null,
  isFetching: false,
  userId: 2
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case UPDATE_NEW_TEXT: {
      return {
        ...state,
        newPostText: action.data
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.data
      }
    }
    case SET_ISFETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
      }
    }
    case SET_USER_ID: {
      return {
        ...state,
        userId: action.data
      }
    }
    default:
      return state;
  }
}


export const setProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    data: profile
  }
}

export const setIsFetching = () => {
  return {
    type: SET_ISFETCHING
  }
}

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    data: userId
  }
}


export default profileReducer;