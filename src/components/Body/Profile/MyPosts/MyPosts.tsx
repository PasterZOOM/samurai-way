import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {PostType} from '../../../../redux/state';

type MyPostsPropsType = {
    post: PostType[]
    newPostText:string
    dispatch: (action:any) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({post, newPostText,dispatch}) => {

    let postElement =
        post.map(p => <Post key={p.id}
                            message={p.message}
                            likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost newPostText={newPostText}
                     dispatch={dispatch}/>
            {postElement}
        </div>
    )

}

export default MyPosts;