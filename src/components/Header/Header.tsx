import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/HeadLogo.png'
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean
    login: string
    setAuthUserDate: (userId: string, email: string, login: string) => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src={logo} alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.item}>{props.login}</div>
                    : <NavLink to={'/login'} className={s.item}>Login</NavLink>}
            </div>
        </header>)
}