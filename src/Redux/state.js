
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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likesCount: 0
            }
            this.state.profilePage.posts.push(newPost)
            this.rerenderDOM()
        } else if(action.type === 'UPDATE-NEW-TEXT'){
            this.state.profilePage.newPostText = action.data
            this.rerenderDOM()
        } else if(action.type === 'ADD-DIALOG'){
            let newDialog = {
                id: 6,
                message: this.state.messagesPage.newMessage
            }
            this.state.messagesPage.messageData.push(newDialog)
            this.rerenderDOM()
        } else if(action.type === 'UPDATE-NEW-DIALOG'){
            this.state.messagesPage.newMessage = action.data;
            this.rerenderDOM()
        }
    }
}

export default store;