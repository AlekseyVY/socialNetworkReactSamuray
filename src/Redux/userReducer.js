const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  usersPage: {
    users: [
      {id: 1, follow: false, fullName: 'Aleksey', status: 'I"m Boss', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 2, follow: true, fullName: 'Kirill', status: 'Chilling out', location: {city: 'Moslow', country: 'Russia'}},
      {
        id: 3,
        follow: false,
        fullName: 'Valera',
        status: 'Lol valera is sooo Valera',
        location: {city: 'Volgograd', country: 'Russia'}
      },
      {
        id: 4,
        follow: true,
        fullName: 'Ololosh',
        status: 'ololooshu po zizni',
        location: {city: 'California', country: 'USA'}
      },
    ]
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersPage: {
          users: state.usersPage.users.map((user) => {
            if(user.id === action.data){
              return {...user, follow: !user.follow}
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
          users: [...state.usersPage.users, action.data]
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