import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../../redux/state';


const Dialog:React.FC<DialogsType> = ({id,name}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

export default Dialog;