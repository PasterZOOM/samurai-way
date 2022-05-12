import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../../redux/dialogsReducer';


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendNewMessageBody: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogsPage,
        sendNewMessageBody, updateNewMessageBody
    }
) => {

    let dialogsElement =
        dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                             id={d.id}
                                             name={d.name}/>)
    let messagesElement =
        dialogsPage.messages.map(m => <Message key={m.id}
                                               id={m.id}
                                               message={m.message}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea value={dialogsPage.newMessageBody}
                          onChange={onNewMessageChange}/>
                <div>
                    <button onClick={sendNewMessageBody}>Send message</button>
                </div>
            </div>
        </div>
    )
}