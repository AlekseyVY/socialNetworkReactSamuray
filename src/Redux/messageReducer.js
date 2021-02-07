const ADD_DIALOG = 'ADD_DIALOG';


let initialState = {
    messageData: [
      {id: 1, message: 'generic message number one'},
      {id: 2, message: 'generic message number two'},
      {id: 3, message: 'generic message number three'},
      {id: 4, message: 'generic message number four'},
      {id: 5, message: 'generic message number five'},
    ],
    dialogs: [
      {id: 1, name: 'Aleksey'},
      {id: 2, name: 'Kirill'},
      {id: 3, name: 'Valera'},
      {id: 4, name: 'BoevoyWertolet'},
      {id: 5, name: 'Ololosh'}
    ]
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG: {
      let newMsg = {
        id: state.messageData.length + 1,
        message: action.data
      }
      return {
        ...state,
        messageData: [...state.messageData, newMsg]
      }
    }
    default:
      return state;
  }
}

export const addDialog = (dialog) => {
  return {
    type: 'ADD_DIALOG',
    data: dialog
  }
}

export const addDialogThunk = (dialog) => {
  return async (dispatch) => {
    dispatch(addDialog(dialog))
  }
}

export default messageReducer;