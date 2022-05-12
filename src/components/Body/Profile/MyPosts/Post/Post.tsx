import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

export const Post: React.FC<PostPropsType> = ({message, likes}) => {
    return (
        <div className={s.content}>
            <img
                src="https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1"
                alt=""/>
            {message}
            <span>  Likes {likes}</span>
        </div>


    )
}