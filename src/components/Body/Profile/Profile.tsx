import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPosts} from './MyPosts/MyPosts';
import {PostType, ProfileType} from '../../../api/api';

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        profile, posts, newPostText, addPost, updateNewPostText
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}
