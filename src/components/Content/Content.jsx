import React from 'react';
import classes from './Content.module.css'
import Posts from './MyPosts/Posts';
import Passport from './Passport/Passport';

const Profile = () => {
    return (
        <div className={classes.content}>
            <Passport />
            <Posts />
        </div>
    )
};

export default Profile;