import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <NewPost/>
            <Post message="Its my first post" likes={32}/>
            <Post message="Its my cecond post" likes={54}/>
        </div>
    )

}

export default MyPosts;