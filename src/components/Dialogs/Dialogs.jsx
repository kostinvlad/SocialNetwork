import React from 'react';
import classes from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors';
import MessageList from './MessageList/MessageList';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            
            <Collocutors className={classes.collocutorsBlock}/>
            <MessageList className={classes.messageListBlock}/>
        </div>
    )
};

export default Dialogs;