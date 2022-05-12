import {v1} from 'uuid';
import {ProfilePageType, profileReducer} from './profileReducer';
import {DialogsPageType, dialogsReducer,} from './dialogsReducer';
import {ActionType} from './reduxStore';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: v1(), message: 'Its my first post', likes: 32},
                {id: v1(), message: 'Its my second post', likes: 54},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Slava'},
                {id: v1(), name: 'Igor'},
                {id: v1(), name: 'Dasha'},
                {id: v1(), name: 'Yura'}],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you'},
                {id: v1(), message: 'Thanks'}],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store