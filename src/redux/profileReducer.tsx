import {v1} from 'uuid'
import {getProfileResponseType, PostType, profileAPI} from '../api/api'
import {AppThunkType} from './reduxStore'

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export type initialStateType = typeof initialState

export type AddPostAT = ReturnType<typeof addPostAC>
export type setStatusAT = ReturnType<typeof setStatusAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>

export type ProfileReducerAT = AddPostAT | setStatusAT | setUserProfileAT

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likes: 32},
        {id: v1(), message: 'Its my second post', likes: 54}
    ] as Array<PostType>,
    profile: {
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: NaN,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export const profileReducer = (state: initialStateType = initialState, action: ProfileReducerAT): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likes: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfileAC = (profile: getProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number): AppThunkType => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatus = (userId: number): AppThunkType => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatus = (status: string): AppThunkType => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}