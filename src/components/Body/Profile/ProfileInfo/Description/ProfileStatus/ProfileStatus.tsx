import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../../../../hooks/hooks'
import {updateStatus} from '../../../../../../redux/profileReducer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../../../../../common/FormsControls/FormsControls'
import {maxLength300, required} from '../../../../../../utils/validators/validators'
import {getStatus} from '../../../../../../redux/profileSelectors'

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()

    const status = useAppSelector(getStatus)

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = (formData: FormDataType) => {
        dispatch(updateStatus(formData.status))
        setEditMode(false)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No Status'}</span>
                </div>
            }
            {editMode &&
                <StatusReduxForm onSubmit={deactivateEditMode}/>
            }
        </div>
    )
}

type FormDataType = {
    status: string,
}

const StatusForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'status'}
                       component={Input}
                       props={{autoFocus: true}}
                       validate={[required, maxLength300]}
                />
            </div>
        </form>
    )
}

const StatusReduxForm = reduxForm<FormDataType>({form: 'status'})(StatusForm)