import {v1} from 'uuid';
import {ActionType, ProfilePageType} from './state';

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state: ProfilePageType, action:ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let message = {id: v1(), message: state.newPostText, likes: 0}
            state.post.unshift(message)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)