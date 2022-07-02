import React from 'react'
import s from './MyPosts.module.css'
import {NewPost} from './NewPost/NewPost'
import {Post} from './Post/Post'
import {useAppSelector} from '../../../../hooks/hooks'

export const MyPosts = () => {
    const posts = useAppSelector(state => state.profilePage.posts)

    let postElement =
        posts.map(p => <Post key={p.id}
                             message={p.message}
                             likes={p.likes}/>)

    return (
        <div className={s.content}>
            <NewPost/>
            {postElement}
        </div>
    )
}