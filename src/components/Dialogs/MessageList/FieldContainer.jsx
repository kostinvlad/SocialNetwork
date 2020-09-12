import React from 'react';
import { updateNewMessageTextCreator, addMessageActionCreator } from '../../../redux/message-reducer'
import Field from './Field';


const FieldContainer = (props) => {
    let newMessageText = props.store.getState().messagesPage.newMessageText

    let url = document.URL;
    let userId = url.split("/")[4]
    window.id = userId;

    function userSearch(object) {
        if (object.id == userId) {
            return true
        }
    }

    let addMessageOnClick = (event) => {
        event.preventDefault()
        props.store.dispatch(addMessageActionCreator(newMessageText, userSearch))
    }
    let messageOnChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageTextCreator(text))
    };

    return (
        <Field addMessage={addMessageOnClick} userSearch={userSearch} updateMessageText={messageOnChange} newMessageText={newMessageText} />
    )
};

export default FieldContainer;