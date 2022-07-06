import React from 'react'
import s from './MyPosts.module.css'
import {NewPost} from './NewPost/NewPost'
import {Post} from './Post/Post'
import {useAppSelector} from '../../../../hooks/hooks'
import {getPosts} from '../../../../redux/profileSelectors'

export const MyPosts = () => {
    const posts = useAppSelector(getPosts)

    let postElement =
        posts.map(post => <Post key={post.id}
                                message={post.message}
                                likes={post.likes}/>)

    return (
        <div className={s.content}>
            <NewPost/>
            {postElement}
        </div>
    )
}