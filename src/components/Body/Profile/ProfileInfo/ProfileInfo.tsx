import React from 'react';
import s from './Profile.module.css';
import {HatPage} from './HatPage/HatPage';
import {Description} from './Description/Description';
import {ProfileType} from '../../../../redux/profileReducer';

type ProfileInfoPropsType = {
    profile:ProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    return (
        <div className={s.content}>
            <HatPage/>
            <Description profile={profile}/>
        </div>
    )

}