import {authAPI} from "../api/api";

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
  return async (dispatch) => {
    let promise = await authAPI.auth()
    await Promise.all([promise])
    dispatch(initialize(true))
  }
}


export default appReducer;