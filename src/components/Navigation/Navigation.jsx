import React from 'react';
import classes from './Navigation.module.css'

const Navigation = () => {
return (
    <div>
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                <li className={classes.item}><a href="/content" className={classes.itemlink}>&#123;Profile&#125;</a></li>
                <li className={classes.item}><a href="/dialogs" className={classes.itemlink}>&Prime;Messages&Prime;</a></li>
                <li className={classes.item}><a href="#0" className={classes.itemlink}>#News</a></li>
                <li className={classes.item}><a href="#0" className={classes.itemlink}>Music &deg;</a></li>
                <li className={classes.item}><a href="#0" className={classes.itemlink}>&#91;Videos&#93;</a></li>
            </ul>
      </nav>
</div>
)
}

export default Navigation;
