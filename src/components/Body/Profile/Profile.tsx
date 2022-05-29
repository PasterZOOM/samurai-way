import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType, ProfileType} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts/MyPosts';

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
