import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {ProfilePageType} from '../../../../redux/state';


const MyPosts = (props: ProfilePageType) => {

    let postElement =
        props.post.map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost/>
            {postElement}
        </div>
    )

}

export default MyPosts;