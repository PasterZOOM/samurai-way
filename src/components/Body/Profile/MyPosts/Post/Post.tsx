import React from 'react'
import s from './Post.module.css'
import {useAppDispatch} from '../../../../../hooks/hooks'
import {deletePostAC} from '../../../../../redux/profileReducer'

type PostPropsType = {
    id: string
    message: string
    likes: number
}

export const Post: React.FC<PostPropsType> = React.memo(({id, message, likes}) => {
    const dispatch = useAppDispatch()
    const onDeleteButtonClick = () => {
        dispatch(deletePostAC(id))
    }

    return (
        <div className={s.content}>
            <img
                src="https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1"
                alt=""/>
            <span>{message}</span>
            <span>  Likes {likes}</span>
            <button onClick={onDeleteButtonClick}>X</button>
        </div>
    )
})