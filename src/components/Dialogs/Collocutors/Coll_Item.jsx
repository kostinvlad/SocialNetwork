import React from 'react';
import classes from './Coll_Item.module.css'
import { NavLink } from 'react-router-dom';

const Coll_Item = (props) => {

    return (
        <div className={classes.coll_Item}>
            <NavLink to={`/dialogs/${props.id}`} className={classes.coll_Item_Link}>Name Name</NavLink>
        </div>
    )
}
export default Coll_Item;