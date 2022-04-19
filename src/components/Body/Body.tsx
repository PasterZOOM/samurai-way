import React from 'react';
import s from './Body.module.css';
import {Route, Routes} from 'react-router-dom';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Setting from './Setting/Setting';
import {StateType} from '../../redux/state';

type BodyPropsType = {
    state: StateType
    addPostCallBack: (postMessage: string) => void
    addMessageCallBack: (messageText: string) => void
}

const Body: React.FC<BodyPropsType> = ({state, addPostCallBack, addMessageCallBack}) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path="/profile" element={<Profile profilePage={state.profilePage}
                                                         addPostCallBack={addPostCallBack}/>}/>
                <Route path="/dialogs" element={<Dialogs dialogsPage={state.dialogsPage}
                                                         addMessageCallBack={addMessageCallBack}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </div>
    )
}

export default Body;