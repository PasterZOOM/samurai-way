export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export type UserLocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export type InitialStateType = typeof initialState


export type FollowACType = {
    type: typeof FOLLOW
    userId: string
}
export type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: string
}
export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type UsersReducerActionType = FollowACType | UnfollowACType | SetUsersACType

let initialState = {
    users: [] as Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {

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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: string): FollowACType => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId: string): UnfollowACType => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})