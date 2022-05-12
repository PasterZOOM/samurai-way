import {combineReducers, legacy_createStore as createStore} from 'redux';
import {AddPostActionCreatorType, profileReducer, UpdateNewPostTextActionCreatorType} from './profileReducer';
import {
    dialogsReducer,
    SendNewMessageBodyActionCreatorType,
    UpdateNewMessageBodyActionCreatorType
} from './dialogsReducer';

export type ReducersType = typeof reducers

export type StoreType = ReturnType<ReducersType>

export type ActionType =
    SendNewMessageBodyActionCreatorType
    | UpdateNewMessageBodyActionCreatorType
    | AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


export let store = createStore(reducers)