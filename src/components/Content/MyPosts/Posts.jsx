import React from 'react';
import classes from './Posts.module.css'
import Post from './Post/Post';


export const Posts = (props) => {
    let textAreaValue = React.createRef()
    let posts = props.posts.map(data => <Post post={data.post} />)
    return (
        <div className={classes.posts}>
            <h2 className={classes.header}>My posts</h2>

            <form className={classes.form}>
                <textarea onChange={props.updateNewPostText} ref={textAreaValue} value={props.newPostText} className={classes.textarea} />
                <button id="button" onClick={props.addPostOnClick} className={classes.button}><p>send</p></button>
            </form>
            
            {posts}
        </div>

    )
};

export default Posts;