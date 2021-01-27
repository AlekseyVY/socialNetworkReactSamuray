const ADD_DIALOG =  'ADD-DIALOG';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';


let initialState = {
    messagesPage: {
        messageData: [
            {id: 1, message: 'generic message number one'},
            {id: 2, message: 'generic message number two'},
            {id: 3, message: 'generic message number three'},
            {id: 4, message: 'generic message number four'},
            {id: 5, message: 'generic message number five'},
        ],
        newMessage: '',
        dialogs: [
            {id: 1, name: 'Aleksey'},
            {id: 2, name: 'Kirill'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'BoevoyWertolet'},
            {id: 5, name: 'Ololosh'}
        ]
    }
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 6,
                message: state.messagesPage.newMessage
            }
            state.messagesPage.messageData.push(newDialog)
            break;
        case UPDATE_NEW_DIALOG:
            state.messagesPage.newMessage = action.data;
            break;
        default:
            return state;
    }
    return state
}



export default messageReducer;