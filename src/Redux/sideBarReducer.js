let initialState = {
  sideBar: {
    friends: [
      {name: 'Aleksey'},
      {name: 'Kirill'},
      {name: 'Valera'}]
  }
}


const sideBarReducer = (state = initialState, action) => {
  return state
}


export default sideBarReducer;