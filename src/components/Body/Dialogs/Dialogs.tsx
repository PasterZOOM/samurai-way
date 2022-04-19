import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {DialogsPageType} from '../../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessageCallBack: (messageText: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessageCallBack}) => {
    let dialogsElement =
        dialogsPage.dialogs.map(d => <Dialog key={d.id}
                                             id={d.id}
                                             name={d.name}/>)
    let messagesElement =
        dialogsPage.messages.map(m => <Message key={m.id}
                                               id={m.id}
                                               message={m.message}/>)


    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessageOnClick = () => {
        if (newMessageElement.current) {
            let postMessage = newMessageElement.current.value
            addMessageCallBack(postMessage)
            newMessageElement.current.value = ('')
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={newMessageElement}/>
                <div>
                    <button onClick={addMessageOnClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;