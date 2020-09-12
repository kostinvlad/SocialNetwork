import React from 'react';
import classes from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';
import { Route } from 'react-router-dom';
import FieldContainer from './FieldContainer';

const MessageList = (props) => {

    let loadMessagesFromId = (id) => {
        console.log(props.store.getState())
        let messages = props.store.getState().messagesPage.collocutors[id].messages.map(data => <MessageItem className={classes.messageBlock} id={data.id} message={data.message} />)
        return messages
    }

    let url = document.URL;
    let id = +url.split("/")[4]
    window.id = id;

    return (
        <div>
            <div className={classes.messageList}>
                <Route path={'/dialogs/' + id} render={() => loadMessagesFromId(id - 1)} />
                <div className={classes.fieldBlock}><FieldContainer store={props.store} /></div>
            </div>

        </div>
    )
}

export default MessageList;
