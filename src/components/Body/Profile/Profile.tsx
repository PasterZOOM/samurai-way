import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallBack: (postMessage: string) => void
    newPostTextCallBack: (newText:string) => void
}

const Profile: React.FC<ProfilePropsType> =
    ({profilePage, addPostCallBack, newPostTextCallBack}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={profilePage.post}
                     newPostText={profilePage.newPostText}
                     addPostCallBack={addPostCallBack}
                     newPostTextCallBack={newPostTextCallBack}
            />
        </div>
    )
}

export default Profile;