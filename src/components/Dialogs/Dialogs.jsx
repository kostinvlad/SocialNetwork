import React from 'react';
import classes from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors';
import MessageList from './MessageList/MessageList';


const Dialogs = () => {
    return (
        <div className='dialogs'>
            <Collocutors />
            <MessageList />
        </div>
    )
};

export default Dialogs;