import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';
const LOGOUT = 'LOGOUT';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
      }
    }
    case LOGOUT: {
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false,
      }
    }
    default:
      return state;
  }
}


export const setUserData = (userId, email, login) => {
  return {
    type: 'SET_USER_DATA',
    data: {userId, email, login}
  }
}

export const fetching = () => {
  return {
    type: 'IS_FETCHING'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}


export const authTHunk = () => {
  return (dispatch) => {
    dispatch(fetching())
    authAPI.auth().then((data) => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setUserData(id, email, login))
      }
      dispatch(fetching())
    })
  }
}


export default authReducer;