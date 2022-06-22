import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {profileReducer, ProfileReducerAT} from './profileReducer'
import {dialogsReducer, DialogsReducerAT} from './dialogsReducer'
import {usersReducer, UsersReducerAT} from './usersReducer'
import {authReducer, AuthReducerAT} from './authReduser'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = UsersReducerAT | ProfileReducerAT | DialogsReducerAT | AuthReducerAT

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))