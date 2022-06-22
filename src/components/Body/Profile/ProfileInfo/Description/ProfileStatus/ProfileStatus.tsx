import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type stateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: stateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevStates: stateType) {

        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus value={this.state.status}
                               onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}