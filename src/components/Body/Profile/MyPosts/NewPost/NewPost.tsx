import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';

type NewPostPropsType = {
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const NewPost: React.FC<NewPostPropsType> = (
    {newPostText, addPost, updateNewPostText}) => {


    const onNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

    return (
        <div className={s.content}>
            <div>
                <textarea value={newPostText}
                          onChange={onNewPostText}/>
            </div>
            <div>
                <button onClick={addPost}>New Post</button>
            </div>
        </div>
    )

}