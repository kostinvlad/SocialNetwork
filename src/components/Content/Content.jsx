import React from 'react';
import classes from './Content.module.css'
import PostsContainer from './MyPosts/PostsContainer';
import Passport from './Passport/Passport';

const Profile = (props) => {
    debugger;
    return (
        <div className={classes.content}>
            <Passport />
            <PostsContainer
                store={props.store} state={props.state} />
        </div>
    )
};

export default Profile;