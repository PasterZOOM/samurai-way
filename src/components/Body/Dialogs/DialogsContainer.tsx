import {Dialogs} from './Dialogs';
import {DialogType, MessageType, sendNewMessageBodyAC, updateNewMessageBodyAC} from '../../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {StoreType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';

export type mapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type mapDispatchToPropsType = {
    sendNewMessageBody: () => void
    updateNewMessageBody: (body: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return (
        {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            newMessageBody: state.dialogsPage.newMessageBody
        }
    )
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
            sendNewMessageBody: () => {
                dispatch(sendNewMessageBodyAC())
            },
            updateNewMessageBody: (body: string) => {
                dispatch(updateNewMessageBodyAC(body))
            }
        }
    )
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



