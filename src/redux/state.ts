export type PostType = {
    id?:number
    message:string
    likes:number
}
export type DialogsType ={
    id: number
    name: string
}
export type MessagesType ={
    id?: number
    message: string
}
export type ProfilePageType={
    post: Array<PostType>
}
export type DialogsPageType={
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state = {
    profilePage: {
        post : [
            {id:1, message:"Its my first post", likes:32},
            {id:2, message:"Its my second post", likes:54},
        ]
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Slava'},
            {id: 3, name: 'Igor'},
            {id: 4, name: 'Dasha'},
            {id: 5, name: 'Yura'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Thanks'}
        ]
    }
}
export default state