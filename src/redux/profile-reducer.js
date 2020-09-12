const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
    posts: [{ id: 1, post: 'Hi, wazzap?' }, { id: 2, post: 'Why u whist?' }],
    newPostText: ""
}

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, postText: text }
}

export const updateNewPostTextCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.postText
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        default:
            return state;
    }
}

export default profileReducer