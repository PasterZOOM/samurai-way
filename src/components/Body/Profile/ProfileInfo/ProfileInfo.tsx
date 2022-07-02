import React from 'react'
import s from './Profile.module.css'
import {Description} from './Description/Description'

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <Description/>
        </div>
    )

}