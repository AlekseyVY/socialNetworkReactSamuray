import {authAPI} from "../api/api";
import {profileThunk} from "./profileReducer";
import {setAuth} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
  initialised: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialised: action.data
      }
    }
    default:
      return state;
  }
}

export const initialize = (status) => {
  return {
    type: 'SET_INITIALIZED',
    data: status
  }
}

export const initThunk = () => {
  return (dispatch) => {
    let promise = authAPI.auth()
    Promise.all([promise]).then(() => {
      dispatch(initialize(true))
      dispatch(setAuth())
    })
  }
}



export default appReducer;