import React from 'react'
import {getUsersTC} from '../../../redux/usersReducer'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import s from '../../Body/Users/Users.module.css'
import {getCurrentPage, getPageSize, getTotalUsersCount} from '../../../redux/usersSelectors'

export const Paginator = () => {
    const dispatch = useAppDispatch()

    const totalUsersCount = useAppSelector(getTotalUsersCount)
    const currentPage = useAppSelector(getCurrentPage)
    const pageSize = useAppSelector(getPageSize)

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

    return (
        <div>
            {pages.map(page =>
                <span key={page}
                      className={currentPage === page ? s.selectedPage : ''}
                      onClick={() => onPageChanged(page)}>
                        {page}
                    </span>
            )}
        </div>
    )
}