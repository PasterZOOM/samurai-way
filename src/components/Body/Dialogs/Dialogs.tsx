import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {DialogsPageType} from '../../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs:React.FC<DialogsPropsType> = ({dialogsPage}) => {
    let dialogsElement =
        dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElement =
        dialogsPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;