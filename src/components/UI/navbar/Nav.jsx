import React from 'react';
import {Data} from './../../../router/index.js';
import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className={classes.navbar}>
            {Data.map((item, index) => {
                return (
                    <li key={index} className={classes.navLink}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;