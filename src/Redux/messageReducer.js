const ADD_DIALOG =  'ADD-DIALOG';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';


const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 6,
                message: state.newMessage
            }
            state.messageData.push(newDialog)
            break;
        case UPDATE_NEW_DIALOG:
            state.newMessage = action.data;
            break;
        default:
            return state;
    }
}



export default messageReducer;