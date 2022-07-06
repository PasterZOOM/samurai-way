import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog'
import {Message} from './Message/Message'
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import {sendNewMessageBodyAC} from '../../../redux/dialogsReducer'
import {maxLength300, required} from '../../../utils/validators/validators'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {Textarea} from '../../common/FormsControls/FormsControls'
import {getDialogs, getMessages} from '../../../redux/dialogsSelectors'

type FormDataType = {
    newMessageBody: string
}

export const DialogsForRedirect = () => {
    const dispatch = useAppDispatch()

    const dialogs = useAppSelector(getDialogs)
    const messages = useAppSelector(getMessages)

    let dialogsElement =
        dialogs.map(dialog => <Dialog key={dialog.id}
                                      id={dialog.id}
                                      name={dialog.name}/>)
    let messagesElement =
        messages.map(message => <Message key={message.id}
                                         id={message.id}
                                         message={message.message}/>)

    const addNewMessage = (formData: FormDataType) => {
        dispatch(sendNewMessageBodyAC(formData.newMessageBody))
        dispatch(reset('dialogAddMessageForm'))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <AddMessageFormRedux onSubmit={addNewMessage} clearSubmit={() => {
                }}/>
            </div>
        </div>
    )
}

export const Dialogs = withAuthRedirect(DialogsForRedirect)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       component={Textarea}
                       placeholder={'New Message'}
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)