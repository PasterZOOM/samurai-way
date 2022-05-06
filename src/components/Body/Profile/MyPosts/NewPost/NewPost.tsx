import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../redux/profileReducer';

type NewPostPropsType = {
    newPostText: string
    dispatch: (action:any) => void
}

const NewPost: React.FC<NewPostPropsType> = ({ newPostText, dispatch}) => {


    const addPostOnClick = () => {
        dispatch(addPostActionCreator())
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.content}>
            <div>
                <textarea value={newPostText}
                          onChange={updateNewPostText}/>
            </div>
            <div>
                <button onClick={addPostOnClick}>New Post</button>
            </div>
        </div>
    )

}

export default NewPost;