import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action:any) => void
}

const Profile: React.FC<ProfilePropsType> =
    ({profilePage,dispatch}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={profilePage.post}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}/>
        </div>
    )
}

export default Profile;