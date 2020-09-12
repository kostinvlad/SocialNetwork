import React from 'react';
import classes from './favoriteFriends.module.css'
import { NavLink } from 'react-router-dom';

const FavoriteFriends = (props) => {
    let path = '/profile'
    return (
        <div className={classes.sidebarWrapper}>
            <h5 className={classes.sidebarHeader}>Favorite Friend</h5>
            <div className={classes.iconBlock}>               
                <NavLink to={path}><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b758f881-6461-4549-bba6-c63b0dbe56a4/d854da1-d2e23822-fbe9-4625-b008-b318d96e953d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3NThmODgxLTY0NjEtNDU0OS1iYmE2LWM2M2IwZGJlNTZhNFwvZDg1NGRhMS1kMmUyMzgyMi1mYmU5LTQ2MjUtYjAwOC1iMzE4ZDk2ZTk1M2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a4_-chuZzSt82VIKxv5YEnBE3nlhhJXfP66qxrVnqRk" /></NavLink>
            </div>

        </div>
    )
}

export default FavoriteFriends;
