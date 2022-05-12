import React from 'react';
import {store} from '../../../redux/reduxStore';
import {sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';


export const DialogsContainer = () => {

    let state = store.getState()

    const sendNewMessageBody = () => {
        store.dispatch(sendNewMessageBodyActionCreator())
    }
    const updateNewMessageBody = (body: string) => {
        store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <div>
            <Dialogs dialogsPage={state.dialogsPage}
                     sendNewMessageBody={sendNewMessageBody}
                     updateNewMessageBody={updateNewMessageBody}
            />
        </div>
    );
};

