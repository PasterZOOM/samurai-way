import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../../redux/state';

type ProfilePropsType ={
    profilePage:ProfilePageType
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}/>
        </div>
    )
}

export default Profile;