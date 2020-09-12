import React from 'react';
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import FavoriteFriends from './sidebar/FavoriteFriends';

const Navigation = (props) => {
return (
    <div className={classes.nav}>
        <nav>
            <ul className={classes.menu}>
                <li className={classes.item}><NavLink to="/content" activeClassName={classes.activeLink} className={classes.itemlink}>&#123;Profile&#125;</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink} className={classes.itemlink}>&Prime;Messages&Prime;</NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink} className={classes.itemlink}>#News</NavLink></li>
                <li className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink} className={classes.itemlink}>Music &deg;</NavLink></li>
                <li className={classes.item}><NavLink to="/videos" activeClassName={classes.activeLink} className={classes.itemlink}>&#91;Videos&#93;</NavLink></li>
            </ul>
            <div className={classes.FavoriteFriendsWrapper}>
                <FavoriteFriends className={classes.FavoriteFriendsBlock}/> 
            </div>
            
      </nav>
      
</div>
)
}

export default Navigation;
