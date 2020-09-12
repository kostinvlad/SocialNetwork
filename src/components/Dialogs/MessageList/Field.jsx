import React from 'react';
import classes from './Field.module.css'

const Field = (props) => {
    let getElementByTextArea = React.createRef();

    let url = document.URL;
    let userId = url.split("/")[4]
    window.id = userId;

    return (
        <div className={classes.posts}>

            <form className={classes.form}>
                <textarea onChange={props.updateMessageText} ref={getElementByTextArea} value={props.newMessageText} className={classes.textarea}></textarea>
                <button onClick={props.addMessage} className={classes.button}><p>send</p></button>
            </form>
        </div>
    )
};

export default Field;