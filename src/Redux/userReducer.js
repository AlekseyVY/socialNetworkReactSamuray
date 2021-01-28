const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  usersPage: {
    users: []
  }
}


const userReducer = (state= initialState , action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersPage: {
          users: state.usersPage.users.map((user) => {
            if(user.id === action.data){
              return {...user, followed: !user.followed}
            } else {
              return user
            }
          })
        }
      }
    }
    case SET_USERS: {
      return {
        ...state,
        usersPage: {
          users: [...state.usersPage.users, ...action.data]
        }
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


export default userReducer;