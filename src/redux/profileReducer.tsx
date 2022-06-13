import {v1} from 'uuid'
import {PostType, ProfileType, usersAPI} from '../api/api'
import {AppThunkType} from './reduxStore';

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type initialStateType = typeof initialState

export type AddPostAT = ReturnType<typeof addPost>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostText>

export type ProfileReducerAT = AddPostAT | UpdateNewPostTextAT | setUserProfileAT

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likes: 32},
        {id: v1(), message: 'Its my second post', likes: 54}
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        aboutMe: '',
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
    }
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
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number): AppThunkType => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
