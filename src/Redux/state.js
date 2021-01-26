let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'This is my first generic post', likesCount: 0},
            {id: 2, message: 'This is my second generic post', likesCount: 45}
        ]
    },
    messagesPage: {
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
    },
    sideBar: {
        friends: [
            {name: 'Aleksey'},
            {name: 'Kirill'},
            {name: 'Valera'}]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state;