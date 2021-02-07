import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {profileThunk} from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';
const SET_AUTH = 'SET_AUTH';


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
    case SET_AUTH: {
      return {
        ...state,
        isAuth: true
      }
    }
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

export const setAuth = () => {
  return {
    type: 'SET_AUTH'
  }
}

export const loginUser = (login, password, rememberMe) => {
  return {
    type: 'LOGIN',
    data: {login, password, rememberMe}
  }
}

export const loginThunk = (login, password, rememberMe) => {

  return async (dispatch) => {
    dispatch(loginUser(login, password, rememberMe))
    const resp = await authAPI.login(login, password, rememberMe)
    if (resp.resultCode === 0) {
      dispatch(authTHunk())
      dispatch(profileThunk(resp.data.userId))
    } else {
      let action = stopSubmit("login", {_error: resp.messages});
      dispatch(action)
    }
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    const resp = await authAPI.logout()
    if (resp.resultCode === 0) {
      dispatch(logout())
    }
  }
}


export const authTHunk = () => {
  return async (dispatch) => {
    dispatch(fetching())
    const data = await authAPI.auth()
    if (data.resultCode === 0) {
      let {id, email, login} = data.data
      dispatch(setUserData(id, email, login))
    }
    dispatch(fetching())
  }
}


export default authReducer;