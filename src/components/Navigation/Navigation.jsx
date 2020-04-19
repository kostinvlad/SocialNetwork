import React from 'react';
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
return (
    <div>
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                <li className={classes.item}><NavLink to="/content" activeClassName={classes.activeLink} className={classes.itemlink}>&#123;Profile&#125;</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink} className={classes.itemlink}>&Prime;Messages&Prime;</NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink} className={classes.itemlink}>#News</NavLink></li>
                <li className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink} className={classes.itemlink}>Music &deg;</NavLink></li>
                <li className={classes.item}><NavLink to="/videos" activeClassName={classes.activeLink} className={classes.itemlink}>&#91;Videos&#93;</NavLink></li>
            </ul>
      </nav>
</div>
)
}

export default Navigation;
