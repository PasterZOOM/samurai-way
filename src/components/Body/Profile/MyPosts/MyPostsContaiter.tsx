import React from 'react';
import s from './MyPosts.module.css';
import {store} from '../../../../redux/reduxStore';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {MyPosts} from './MyPosts';

export const MyPostsContainer = () => {
    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }
    const updateNewPostText = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={s.content}>
            <MyPosts profilePage={state.profilePage}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}