import {v1} from 'uuid';
import {ActionType} from './reduxStore';


export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SendNewMessageBodyActionCreatorType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageBodyActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    body: string
}

let initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
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

export const sendNewMessageBodyActionCreator = (): SendNewMessageBodyActionCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body: string): UpdateNewMessageBodyActionCreatorType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})