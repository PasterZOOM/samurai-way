import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';

type NewPostPropsType = {
    addPostCallBack: (postMessage: string) => void
    newPostTextCallBack: (newText: string) => void
    newPostText: string
}

const NewPost: React.FC<NewPostPropsType> = ({addPostCallBack, newPostTextCallBack, newPostText}) => {


    const addPostOnClick = () => {
        addPostCallBack(newPostText)

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newPostTextCallBack(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <div>
                <textarea value={newPostText}
                          onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPostOnClick}>New Post</button>
            </div>
        </div>
    )

}

export default NewPost;