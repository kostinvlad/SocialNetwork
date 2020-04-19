import React from 'react';
import classes from'./Passport.module.css'

const Passport = (props) => {
    return (
            
    <div className={classes.passport}>
        <div className="avatar">
            <img src="http://avatarmaker.ru/img/11/1021/102060.jpg"></img>
        </div>
        

        <div className={classes.description}>
            <h1>Мухамед инб Азиз</h1>
            <p>Education: Liceum 6</p>
            <p>Location: Sahravi</p>
            <p>Job: Backend</p>
        </div>
    </div> 

    )
};

export default Passport;