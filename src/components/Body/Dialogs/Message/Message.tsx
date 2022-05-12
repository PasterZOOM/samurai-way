import React from 'react';
import s from './Message.module.css';
import {MessagesType} from '../../../../redux/dialogsReducer';


export const Message: React.FC<MessagesType> = ({id, message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}