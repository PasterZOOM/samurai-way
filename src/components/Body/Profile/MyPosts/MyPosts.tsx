import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {PostType} from '../../../../redux/state';

type MyPostsPropsType = {
    post: PostType[]
    addPostCallBack: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({post, addPostCallBack}) => {

    let postElement =
        post.map(p => <Post key={p.id}
                            message={p.message}
                            likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost addPostCallBack={addPostCallBack}/>
            {postElement}
        </div>
    )

}

export default MyPosts;