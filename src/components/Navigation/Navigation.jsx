import React from 'react';
import classes from './Navigation.module.css'

const Navigation = () => {
return (
    <div>
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                <li className={classes.item}>&#123;Profile&#125;</li>
                <li className={classes.item}>&Prime;Messages&Prime;</li>
                <li className={classes.item}>#News</li>
                <li className={classes.item}>Music &deg;</li>
                <li className={classes.item}>&#91;Videos&#93;</li>
            </ul>
      </nav>
</div>
)
}

export default Navigation;
