import React from 'react';
import s from './Message.module.css';
import {MessageType} from '../../../../redux/dialogsReducer';


export const Message: React.FC<MessageType> = ({id, message}) => {
    return (
        <div className={s.message} id={id}>{message}</div>
    )
}