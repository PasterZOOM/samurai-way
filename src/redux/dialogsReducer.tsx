import {v1} from 'uuid';
import {ActionType, DialogsPageType} from './state';


export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: body})
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendNewMessageBodyActionCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyActionCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
} as const)