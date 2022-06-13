import {v1} from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type initialStateType = typeof initialState

export type SendNewMessageBodyACType = ReturnType<typeof sendNewMessageBodyAC>
export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>

export type DialogsReducerAT = SendNewMessageBodyACType | UpdateNewMessageBodyACType

let initialState = {
    dialogs: [
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Slava'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Yura'}
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Thanks'}
    ] as Array<MessageType>,
    newMessageBody: ''
}

export const dialogsReducer =
    (state: initialStateType = initialState, action: DialogsReducerAT): initialStateType => {
        switch (action.type) {
            case SEND_MESSAGE:
                let newMessage = {id: v1(), message: state.newMessageBody}
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageBody: ''
                }
            case UPDATE_NEW_MESSAGE_BODY:
                return {
                    ...state,
                    newMessageBody: action.body
                }
            default:
                return state
        }
    }

export const sendNewMessageBodyAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)