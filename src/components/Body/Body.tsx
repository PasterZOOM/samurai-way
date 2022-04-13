import React from 'react';
import s from './Body.module.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import {RootStateType} from '../../redux/state';

type BodyPropsTupe = {
    state:RootStateType
}

const Body = (props:BodyPropsTupe) => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path="/profile" element={<Profile profilePage={props.state.profilePage}/>}/>
                <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </div>
    )
}

export default Body;