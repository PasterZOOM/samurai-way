import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

type ActionType = {
    [key: string]: boolean
}

export const Navbar = () => {

    const setAction = ({isActive}: ActionType) => isActive ? s.active : s.item

    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" className={setAction}>Profiles</NavLink></div>
            <div><NavLink to="/dialogs" className={setAction}>Messages</NavLink></div>
            <div><NavLink to="/news" className={setAction}>News</NavLink></div>
            <div><NavLink to="/music" className={setAction}>Music</NavLink></div>
            <div><NavLink to="/setting" className={setAction}>Settings</NavLink></div>
        </nav>
    )
}
