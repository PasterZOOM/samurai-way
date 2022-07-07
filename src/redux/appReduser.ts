import {getAuthUserDateTC} from './authReduser'
import {AppThunkType} from './reduxStore'

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppReducerAT) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'} as const)

export const initializeAppTC = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserDateTC())
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export type AppReducerAT = InitializedSuccessType

