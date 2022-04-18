import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../../redux/state';

type ProfilePropsType={
    profilePage : ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = ({profilePage}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={profilePage.post}/>
        </div>
    )
}

export default Profile;