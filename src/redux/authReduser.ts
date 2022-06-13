import {AppThunkType} from './reduxStore';
import {authAPI} from '../api/api';

const SET_USER_DARE = 'SET_USER_DARE'

type initialStateType = typeof initialState

export type setAuthUserDateAT = ReturnType<typeof setAuthUserDate>

export type AuthReducerAT = setAuthUserDateAT

let initialState = {
    id: '1',
    email: 'sds',
    login: 'fd',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerAT) => {

    switch (action.type) {
        case SET_USER_DARE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDate = (userId: number, email: string, login: string) => ({
    type: SET_USER_DARE,
    data: {userId, email, login}
})

export const getAuthUserDate = (): AppThunkType => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDate(id, email, login))
            }
        })
}
