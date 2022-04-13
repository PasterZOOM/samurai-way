import React from 'react';
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from '../../../../redux/state';


const Dialog = (props:DialogsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;