import React from 'react';
import s from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={s.content}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New Post</button>
            </div>
        </div>
    )

}

export default NewPost;