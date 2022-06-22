import {AppRootStateType} from '../../../redux/reduxStore'
import {addPost, getStatus, getUserProfile, updateNewPostText, updateStatus} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import React, {ComponentType} from 'react'
import {Profile} from './Profile'
import {Params, useParams} from 'react-router-dom'
import {compose} from 'redux'

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    getUserProfile: (profile: number) => void
    updateStatus: (newStatus: string) => void
    getStatus: (userId: number) => void
}

export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType

type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
    params: Params
}

class ProfileRequestContainer extends React.Component<ProfileRequestContainerType> {

    componentDidMount() {
        let {userId} = this.props.params
        userId && this.props.getUserProfile(+userId)
        userId && this.props.getStatus(+userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     posts={this.props.posts}
                     status={this.props.status}
                     newPostText={this.props.newPostText}
                     addPost={this.props.addPost}
                     updateNewPostText={this.props.updateNewPostText}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    })
}

function withRouter(Component: ComponentType<ProfileRequestContainerType>) {
    function ComponentWithParams(props: WithUrlDataContainerComponentType) {
        return <Component {...props} params={useParams()}/>
    }

    return ComponentWithParams
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, getUserProfile, updateNewPostText, updateStatus, getStatus}),
    withRouter)(ProfileRequestContainer)