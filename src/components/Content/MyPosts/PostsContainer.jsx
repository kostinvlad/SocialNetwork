import React from 'react';
import { updateNewPostTextCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import { Posts } from './Posts'

const PostsContainer = (props) => {
    let textAreaValue = '';
    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText

    let addPostOnClick = (event) => {
        event.preventDefault();
        let text = newPostText;
        props.store.dispatch(addPostActionCreator(text))
        textAreaValue = "";
        return false;
    }

    let postOnChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewPostTextCreator(text))
    };

    let posts = state.profilePage.posts
    return (
        <Posts addPostOnClick={addPostOnClick} updateNewPostText={postOnChange} newPostText={newPostText} posts={posts} />
    )
};

export default PostsContainer;
