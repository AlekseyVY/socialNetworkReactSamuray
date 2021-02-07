import {createSelector} from "reselect";


export const getUsers = (state) => {
  return state.userReducer.users
}

export const getUsersFilter = (state) => {
  return getUsers().filter(u => true)
}

export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users.filter(u => true)
})


export const getPageSize = (state) => {
  return state.userReducer.pageSize
}

export const currentPage = (state) => {
  return state.userReducer.currentPage
}

export const followingProcess = (state) => {
  return state.userReducer.followingProcess

}