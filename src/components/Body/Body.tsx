import React from 'react';
import s from './Body.module.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";

const Body = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </div>
    )
}

export default Body;