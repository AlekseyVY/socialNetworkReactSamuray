import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_ISFETCHING = 'SET_ISFETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProcess: []
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.data) {
            return {...user, followed: !user.followed}
          } else {
            return user
          }
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.data]
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.data
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUserCount: action.data
      }
    }
    case SET_ISFETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
      }
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingProcess: action.data.status
          ? [...state.followingProcess, action.data.id]
          : [...state.followingProcess.filter((id) => action.data.id !== id)]
      }
    }
    default:
      return state;
  }
}

export const follow = (userId) => {
  return {
    type: 'FOLLOW',
    data: userId
  }
}

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    data: users
  }
}

export const setPage = (pageNumber) => {
  return {
    type: "SET_CURRENT_PAGE",
    data: pageNumber
  }
}

export const setUsersCount = (totalCount) => {
  return {
    type: "SET_TOTAL_COUNT",
    data: totalCount
  }
}

export const setIsFetching = () => {
  return {
    type: "SET_ISFETCHING"
  }
}

export const followingInProgress = (status, id) => {
  return {
    type: 'FOLLOWING_IN_PROGRESS',
    data: {status, id}
  }
}
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching())
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching());
    dispatch(setUsers(data.items));
    dispatch(setUsersCount(data.totalCount));
  }
}
export const getFollow = (status, id) => {
  return async (dispatch) => {
    dispatch(followingInProgress(status, id))
    if (status === true) {
      const data = await usersAPI.followUser(id)
      if (data.resultCode === 0) {
        dispatch(followingInProgress(status, id));
        dispatch(follow(id))
      }
    } else {
      const data = await usersAPI.unFollowUser(id)
      if (data.resultCode === 0) {
        dispatch(followingInProgress(status, id));
        dispatch(follow(id))
      }
    }
  }
}

export const pageChange = (pageNumber, currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching())
    dispatch(setPage(pageNumber))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching())
    dispatch(setUsers(data.items))
  }
}


export default userReducer;