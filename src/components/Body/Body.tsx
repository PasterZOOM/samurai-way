import React from 'react'
import s from './Body.module.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import {News} from './News/News'
import {Music} from './Music/Music'
import {Setting} from './Setting/Setting'
import {Login} from './Login/Login'
import {Dialogs} from './Dialogs/Dialogs'
import {Profile} from './Profile/Profile'
import {Users} from './Users/Users'
import {useAppSelector} from '../../hooks/hooks'
import {getId} from '../../redux/authSelectors'

export const Body = () => {

    const authUserId = useAppSelector(getId)

    return (
        <div className={s.content}>
            <Routes>
                <Route path={'*'} element={<Navigate to={'/profile/' + authUserId}/>}/>
                <Route path="/profile/:userId" element={<Profile/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

        </div>
    )
}
