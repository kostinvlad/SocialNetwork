import React from 'react';
import classes from './Content.module.css'
import Posts from './MyPosts/Posts';
import Passport from './Passport/Passport';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <Passport />
            <Posts posts={props.profileStates.posts} />
        </div>
    )
};

export default Profile;