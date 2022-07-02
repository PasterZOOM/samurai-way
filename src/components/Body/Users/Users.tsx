import React, {useEffect} from 'react'
import s from './Users.module.css'
import userPhoto from './img/userPhoto.png'
import {NavLink} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import Preload from '../../common/Preload/Preload'
import {followTC, getUsersTC, unfollowTC} from '../../../redux/usersReducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

export const UsersForRedirect = () => {
    const dispatch = useAppDispatch()

    const isFetching = useAppSelector(state => state.usersPage.isFetching)
    const followingInProgress = useAppSelector(state => state.usersPage.followingInProgress)
    const currentPage = useAppSelector(state => state.usersPage.currentPage)
    const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
    const pageSize = useAppSelector(state => state.usersPage.pageSize)
    const users = useAppSelector(state => state.usersPage.users)

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: Array<number> = []
    if (currentPage <= 3) {
        for (let i = 1; i <= 7; i++) {
            pages.push(i)
        }
    } else if (currentPage + 3 >= pagesCount) {
        for (let i = (currentPage - 3); i <= pagesCount; i++) {
            pages.push(i)
        }
    } else {
        for (let i = (currentPage - 3); i <= (currentPage + 3); i++) {
            pages.push(i)
        }
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    }
    const follow = (userId: number) => {
        dispatch(followTC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowTC(userId))
    }
    
    useEffect(() => {
        dispatch(getUsersTC(pages[0], pageSize))
    }, [])

    return (
        <div>{isFetching ? <Preload/> :
            <div>
                {pages.map(page =>
                    <span key={page}
                          className={currentPage === page ? s.selectedPage : ''}
                          onClick={() => onPageChanged(page)}>
                        {page}
                    </span>
                )}
                {users.map(user => <div key={user.id}>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}
                                 alt={'avatar'}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}
                                >Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}
                                >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
        }</div>
    )
}

export const Users = withAuthRedirect(UsersForRedirect)