import {renderEntiredTree} from '../render';
import {v1} from 'uuid';

export type PostType = {
    id: string
    message: string
    likes: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state = {
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
            {id: v1(), name: 'Yura'}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you'},
            {id: v1(), message: 'Thanks'}
        ]
    }
}

export const addPost = () => {
    const post: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.post.unshift(post)
    renderEntiredTree(state)
}
export const addMessage = (messageText: string) => {
    const message: MessagesType = {
        id: v1(),
        message: messageText,
    }
    state.dialogsPage.messages.push(message)
    renderEntiredTree(state)
}

export const changeNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    renderEntiredTree(state)
}


export default state