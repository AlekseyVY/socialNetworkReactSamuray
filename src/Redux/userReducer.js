const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 23,
    currentPage: 1
}


const userReducer = (state= initialState , action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
          users: state.users.map((user) => {
            if(user.id === action.data){
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
    default:
      return state;
  }
}

export const follow = (userId) => {
  return {
    type: FOLLOW,
    data: userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    data: users
  }
}

export const setPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    data: pageNumber
  }
}

export const setUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    data: totalCount
  }
}

export default userReducer;