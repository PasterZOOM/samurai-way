import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {DialogsPageType} from '../../../redux/state';
import {sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator,} from '../../../redux/dialogsReducer';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: any) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {
    let dialogsElement =
        dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                             id={d.id}
                                             name={d.name}/>)
    let messagesElement =
        dialogsPage.messages.map(m => <Message key={m.id}
                                               id={m.id}
                                               message={m.message}/>)

    const addMessageOnClick = () => {
        dispatch(sendNewMessageBodyActionCreator())
    }
    const updateNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea value={dialogsPage.newMessageBody}
                          onChange={updateNewMessageBody}/>
                <div>
                    <button onClick={addMessageOnClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;