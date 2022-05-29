import {StoreType} from '../../../redux/reduxStore';
import {addPost, PostType, ProfileType, setUserProfile, updateNewPostText} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import axios from 'axios';
import React from 'react';
import {Profile} from './Profile';
import {Params, useParams} from 'react-router-dom';

export type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    setUserProfile: (profile: ProfileType) => void
}

export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType

type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
    params: Params
}

class ProfileRequestContainer extends React.Component<ProfileRequestContainerType> {

    componentDidMount() {
        const {userId} = this.props.params;
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
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

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    })
}

const WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentType) => {
    return <ProfileRequestContainer {...props} params={useParams()}/>
}


export const ProfileContainer = connect(mapStateToProps, {
    addPost, setUserProfile, updateNewPostText
})(WithUrlDataContainerComponent)
