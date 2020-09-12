import React from 'react';
import classes from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors';
import MessageList from './MessageList/MessageList';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <Collocutors store={props.store} className={classes.collocutorsBlock} />
            <MessageList store={props.store} className={classes.messageListBlock} />
        </div>
    )
};

export default Dialogs;