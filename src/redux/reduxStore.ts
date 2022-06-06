import {combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import { usersReducer } from './usersReducer';
import {authReducer} from './authReduser';

export type StoreType = ReturnType<typeof rootReducers>

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducers)