import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import Preload from '../../common/Preload/Preload'
import {getUsersTC} from '../../../redux/usersReducer'
import {getIsFetching, getPageSize, getUsers} from '../../../redux/usersSelectors'
import {getIsAuth} from '../../../redux/authSelectors'
import {Paginator} from '../../common/Paginator/Paginator'
import {User} from './User/User'

export const Users = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(getIsAuth)
    const isFetching = useAppSelector(getIsFetching)
    const users = useAppSelector(getUsers)
    const pageSize = useAppSelector(getPageSize)


    useEffect((currentPage = 1) => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [dispatch, pageSize])

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div>{isFetching ? <Preload/> :
            <div>
                <Paginator/>
                {users.map(user => <User key={user.id}
                                         user={user}/>)}
            </div>
        }</div>
    )
}