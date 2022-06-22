import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {MyPosts} from './MyPosts/MyPosts'
import {getProfileResponseType, PostType} from '../../../api/api'

type ProfilePropsType = {
    status: string
    profile: getProfileResponseType
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
    updateStatus: (newStatus: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        profile, posts, newPostText, addPost, updateNewPostText, updateStatus, status
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}
