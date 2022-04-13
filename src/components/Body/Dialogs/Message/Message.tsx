import React from 'react';
import s from "./Message.module.css";
import {MessagesType} from '../../../../redux/state';


const Message = (props:MessagesType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;