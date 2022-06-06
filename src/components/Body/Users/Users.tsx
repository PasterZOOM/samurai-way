import React from 'react';
import s from './Users.module.css'
import userPhoto from './img/userPhoto.png'
import {NavLink} from 'react-router-dom';
import {UserType} from '../../../redux/usersReducer';
import {usersAPI} from '../../../api/api';

export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (
    {
        totalUsersCount, pageSize, currentPage,
        onPageChanged, users, unfollow, follow,
        followingInProgress, toggleFollowingProgress
    }
) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
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

    return (
        <div>
            {pages.map(p =>
                <span key={p}
                      className={currentPage === p ? s.selectedPage : ''}
                      onClick={() => onPageChanged(p)}>
                        {p}
                    </span>
            )}
            {users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}
                                 alt={'avatar'}/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    toggleFollowingProgress(true, u.id)
                                    usersAPI.unfollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                unfollow(u.id)
                                            }
                                            toggleFollowingProgress(false, u.id)
                                        })

                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    toggleFollowingProgress(true, u.id)
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                follow(u.id)
                                            }
                                            toggleFollowingProgress(false, u.id)
                                        })

                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
            }
        </div>
    )
}
