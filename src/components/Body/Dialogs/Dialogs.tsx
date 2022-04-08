import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name={'Ivan'} id={1}/>
                <Dialog name={'Slava'} id={2}/>
                <Dialog name={'Igor'} id={3}/>
                <Dialog name={'Dasha'} id={4}/>
                <Dialog name={'Yura'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Thanks'}/>
            </div>
        </div>
    )
}

export default Dialogs;