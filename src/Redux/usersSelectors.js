


export const getUsers = (state) => {
  return state.userReducer.users
}

export const getPageSize = (state) => {
  return state.userReducer.pageSize
}

export const currentPage = (state) => {
  return state.userReducer.currentPage
}

export const followingProcess = (state) => {
  return state.userReducer.followingProcess

}