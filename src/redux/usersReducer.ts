import {usersAPI, UserType} from '../api/api'
import {AppThunkType} from './reduxStore'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type InitialStateType = typeof initialState

export type FollowAT = ReturnType<typeof followSuccess>
export type UnfollowAT = ReturnType<typeof unfollowSuccess>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export type UsersReducerAT = FollowAT | UnfollowAT | SetUsersAT |
    SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT | ToggleFollowingProgressAT

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)


export const getUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
            })
            .finally(() => dispatch(toggleIsFetching(false)))
    }
}
export const follow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
            })
            .finally(() => dispatch(toggleFollowingProgress(false, userId)))
    }
}
export const unfollow = (userId: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
            })
            .finally(() => dispatch(toggleFollowingProgress(false, userId)))
    }
}
