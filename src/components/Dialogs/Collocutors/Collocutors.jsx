import React from 'react';
import classes from './Collocutors.module.css'
import Coll_Item from './Coll_Item';


const Collocutors = (props) => { 
        let colls = props.states.map( data => <Coll_Item id={data.id} name={data.name}/> );           
       
   
return (
    <div className={classes.collocutors}>
        {colls}        
    </div>
)
}

export default Collocutors;
