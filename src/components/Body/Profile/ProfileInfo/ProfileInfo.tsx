import React from 'react'
import s from './Profile.module.css'
import {Description} from './Description/Description'
import {getProfileResponseType} from '../../../../api/api'


type ProfileInfoPropsType = {
    status: string
    profile: getProfileResponseType
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile,updateStatus, status}) => {
    return (
        <div className={s.content}>
            {/*<HatPage/>*/}
            <Description profile={profile}  updateStatus={updateStatus} status={status}/>
        </div>
    )

}