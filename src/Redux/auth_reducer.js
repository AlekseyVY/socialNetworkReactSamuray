import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';


let initialState = {
  userId: null,
  email: null,
  login: null,
  password: null,
  rememberMe: false,
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
    case LOGIN: {
      return {
        ...state,
        login: action.data.login,
        password: action.data.password,
        rememberMe: action.data.rememberMe

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

export const loginUser = (login, password, rememberMe) => {
  return {
    type: 'LOGIN',
    data: { login, password, rememberMe }
  }
}

export const loginThunk = (login, password, rememberMe) => {

  return (dispatch) => {
    dispatch(loginUser(login, password, rememberMe))
    authAPI.login(login, password, rememberMe)
      .then((resp) => {
        if(resp.resultCode === 0){
          dispatch(authTHunk())
        } else {
          let action = stopSubmit("login", {_error: resp.messages});
          dispatch(action)
        }
      })
  }
}

export const logoutThunk = () => {
  return (dispatch) => {
    authAPI.logout().then((resp) => {
      if(resp.resultCode === 0){
        dispatch(logout())
      }
    })
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