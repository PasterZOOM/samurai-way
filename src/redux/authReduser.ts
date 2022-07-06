import {AppThunkType} from './reduxStore'
import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'
import {initializedSuccess} from './appReduser'

const SET_USER_DARE = 'SET_USER_DARE'

type initialStateType = typeof initialState

export type setAuthUserDateAT = ReturnType<typeof setAuthUserDateAC>

export type AuthReducerAT = setAuthUserDateAT

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerAT) => {

    switch (action.type) {
        case SET_USER_DARE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserDateAC = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DARE,
    payload: {id, email, login, isAuth}
})

export const getAuthUserDateTC = (): AppThunkType => (dispatch) =>
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDateAC(id, email, login, true))
                dispatch(initializedSuccess())
            }
        })


export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) =>
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDateTC())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })

export const logout = (): AppThunkType => (dispatch) =>
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDateAC(0, '', '', false))
            }
        })
