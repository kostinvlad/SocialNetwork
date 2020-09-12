import React from 'react';
import classes from './Coll_Item.module.css'
import { NavLink } from 'react-router-dom';


const Coll_Item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.coll_Item}>

            <NavLink to={path} className={classes.coll_Item_Link}>{props.name}</NavLink>
        </div>
    )
}
export default Coll_Item;