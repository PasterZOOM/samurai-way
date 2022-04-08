import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

//function for navbar active item color
const setActive = navData => navData.isActive ? s.active : s.item

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = {setActive}>Profils</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = {setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = {setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = {setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className = {setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;