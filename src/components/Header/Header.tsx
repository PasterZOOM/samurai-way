import React, {useEffect} from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/HeadLogo.png'
import {NavLink} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {getAuthUserDateTC, logout} from '../../redux/authReduser'

export const Header = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    const onClickLogoutButton = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(getAuthUserDateTC())
    }, [dispatch])

    return (
        <header className={styles.header}>
            <img
                src={logo} alt="logo"/>

            <div className={styles.loginBlock}>
                {isAuth ?
                    <div className={styles.item}>{login} - <button onClick={onClickLogoutButton}>Logout</button></div>
                    : <NavLink to={'/login'} className={styles.item}>Login</NavLink>}
            </div>
        </header>)
}