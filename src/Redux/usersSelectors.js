


export const getUsers = (state) => {
  return state.useReducer.users
}

export const getPageSize = (state) => {
  return state.useReducer.pageSize
}

export const currentPage = (state) => {
  return state.useReducer.currentPage
}

export const followingProcess = (state) => {
  return state.useReducer.followingProcess
}