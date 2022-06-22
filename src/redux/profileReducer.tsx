import {v1} from 'uuid'
import {getProfileResponseType, PostType, profileAPI} from '../api/api'
import {AppThunkType} from './reduxStore'

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export type initialStateType = typeof initialState

export type AddPostAT = ReturnType<typeof addPost>
export type setStatusAT = ReturnType<typeof setStatus>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostText>

export type ProfileReducerAT = AddPostAT | setStatusAT | setUserProfileAT | UpdateNewPostTextAT

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likes: 32},
        {id: v1(), message: 'Its my second post', likes: 54}
    ] as Array<PostType>,
    newPostText: '',
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
            let newPost = {id: v1(), message: state.newPostText, likes: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: getProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)


export const getUserProfile = (userId: number): AppThunkType => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId:number): AppThunkType => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string): AppThunkType => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}