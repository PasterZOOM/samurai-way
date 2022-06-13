import {AppRootStateType} from '../../../redux/reduxStore';
import {addPost, getUserProfile, updateNewPostText} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import React from 'react';
import {Profile} from './Profile';
import {Params, useParams, Navigate} from 'react-router-dom';

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    getUserProfile: (profile: number) => void
}

export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType

type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
    params: Params
}

class ProfileRequestContainer extends React.Component<ProfileRequestContainerType> {

    componentDidMount() {
        let {userId} = this.props.params
        userId && this.props.getUserProfile(+userId)

    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     posts={this.props.posts}
                     newPostText={this.props.newPostText}
                     addPost={this.props.addPost}
                     updateNewPostText={this.props.updateNewPostText}
            />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    })
}

const WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentType) => {
    return <ProfileRequestContainer {...props} params={useParams()}/>
}

export const ProfileContainer = connect(mapStateToProps, {
    addPost, getUserProfile, updateNewPostText
})(WithUrlDataContainerComponent)
