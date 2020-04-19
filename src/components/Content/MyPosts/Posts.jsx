import React from 'react';
import classes from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.header}>My posts</h2>
            <form className={classes.form}>

                <textarea className={classes.textarea}>
                </textarea>
                <button className={classes.button}><p>send</p></button>
            </form>
            <Post message="Hi!"/>
            <Post message="How are u?"/>
        </div>

    )
};

export default Posts;