import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const ADD_DIALOG =  'ADD-DIALOG';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'This is my first generic post', likesCount: 0},
                {id: 2, message: 'This is my second generic post', likesCount: 45}
            ],
            newPostText: ''
        },
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
        },
        sideBar: {
            friends: [
                {name: 'Aleksey'},
                {name: 'Kirill'},
                {name: 'Valera'}]
        }
    },
    rerenderDOM() {},

    getState() {
        return this.state
    },
    subscribe(observer) {
        this.rerenderDOM = observer
    },

    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.messagesPage = messageReducer(this.state.messagesPage, action)
        this.state.sideBar = sideBarReducer(this.state.sideBar, action)
        this.rerenderDOM()
    }
}

export const formAction = (type, data = '') => {
    return (
        {
            type: type,
            data: data
        })
}

export default store;