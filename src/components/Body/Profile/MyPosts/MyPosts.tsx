import React from 'react';
import s from './MyPosts.module.css';
import {ProfilePageType} from '../../../../redux/profileReducer';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';


type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {profilePage, addPost, updateNewPostText}) => {

    let postElement =
        profilePage.post.map(p => <Post key={p.id}
                                        message={p.message}
                                        likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            {postElement}
        </div>
    )
}