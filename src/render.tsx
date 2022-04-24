import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addMessage, addPost, changeNewPostText, StateType} from './redux/state';

export const renderEntiredTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPostCallBack={addPost}
                     addMessageCallBack={addMessage}
                     newPostTextCallBack={changeNewPostText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}