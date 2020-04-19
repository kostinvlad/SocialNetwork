import React from 'react';
import classes from './Collocutors.module.css'
import Coll_Item from './Coll_Item';

const Collocutors = (props) => {
return (
    <div className={classes.collocutors}>
        <Coll_Item id='1'/>
        <Coll_Item id='2'/>
        <Coll_Item id='3'/>
        <Coll_Item id='4'/>
        
    </div>
)
}

export default Collocutors;
