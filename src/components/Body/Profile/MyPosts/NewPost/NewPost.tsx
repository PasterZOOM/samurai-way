import React from 'react';
import s from './NewPost.module.css';

type NewPostPropsType = {
    addPostCallBack: (postMessage: string) => void
}

const NewPost: React.FC<NewPostPropsType> = ({addPostCallBack}) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostOnClick = () => {
        if (newPostElement.current) {
            let postMessage = newPostElement.current.value
            addPostCallBack(postMessage)
            newPostElement.current.value = ('')
        }
    }

    return (
        <div className={s.content}>
            <div>
                <textarea ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPostOnClick}>New Post</button>
            </div>
        </div>
    )

}

export default NewPost;