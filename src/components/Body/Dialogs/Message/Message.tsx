import React from 'react';
import s from './Message.module.css';
import {MessagesType} from '../../../../redux/state';

const Message:React.FC<MessagesType> = ({id, message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;