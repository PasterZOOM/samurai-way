import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContaiter';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
