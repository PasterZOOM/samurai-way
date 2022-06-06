const SET_USER_DARE = 'SET_USER_DARE'

export type initialStateType = typeof initialState
export type setAuthUserDateAT = ReturnType<typeof setAuthUserDate>
export type AuthReducerActionsType = setAuthUserDateAT

let initialState = {
    id: '1',
    email: 'sds',
    login: 'fd',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerActionsType) => {

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

export const setAuthUserDate = (userId: string, email: string, login: string) => ({
    type: SET_USER_DARE,
    data: {userId, email, login}
})

