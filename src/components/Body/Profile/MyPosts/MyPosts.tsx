import React from 'react';
import s from './MyPosts.module.css';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';
import {mapDispatchToPropsType, mapStateToPropsType} from './MyPostsContaiter';

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const MyPosts: React.FC<MyPostsPropsType> = (
    {posts, newPostText, addPost, updateNewPostText}) => {

    let postElement =
        posts.map(p => <Post key={p.id}
                             message={p.message}
                             likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost newPostText={newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            {postElement}
        </div>
    )
}