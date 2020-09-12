import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={require("./../img/logo2.png")}/>
            
        </header>
    )
}

export default Header;