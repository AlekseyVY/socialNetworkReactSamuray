const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'This is my first generic post', likesCount: 0},
            {id: 2, message: 'This is my second generic post', likesCount: 45}
        ],
        newPostText: ''
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            break;
        case UPDATE_NEW_TEXT:
            state.profilePage.newPostText = action.data
            break;
        default:
            return state;
    }
    return state
}

export default profileReducer;