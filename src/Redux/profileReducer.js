import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_ISFETCHING = 'SET_ISFETCHING';
const SET_USER_ID = 'SET_USER_ID';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'This is my first generic post', likesCount: 0},
    {id: 2, message: 'This is my second generic post', likesCount: 45}
  ],
  profile: null,
  isFetching: false,
  userId: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.data,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
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
    case SET_STATUS: {
      return {
        ...state,
        status: action.data
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


export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    data: status
  }
}

export const setNewPost = (post) => {
  return {
    type: ADD_POST,
    data: post
  }
}

export const newPost = (post) => {
  return (dispatch) => {
    dispatch(setNewPost(post))
  }
}


export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
  }
}


export const profileThunk = (userId = 14529) => {
  return (dispatch) => {
    dispatch(setIsFetching())
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setIsFetching())
      dispatch(setProfile(data))
    })
  }
}


export default profileReducer;