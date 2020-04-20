import React from 'react';
import classes from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';

const MessageList = (props) => {
    let messages = props.states.map( data => <MessageItem className={classes.messageBlock} id={data.id} message={data.message}/> );    

    return (
        <div className={classes.messageList}>
            {messages}
            
        </div>
    )
}

export default MessageList;
