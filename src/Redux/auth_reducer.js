const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      }
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
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



export default authReducer;