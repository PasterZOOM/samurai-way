import React, {ChangeEvent} from 'react'

import mainPhoto from 'assets/images/userPhoto.png'
import styles from './Profile.module.css'
import Preload from 'components/common/Preload/Preload'
import {getProfile} from 'redux/profileSelectors'
import {
  ProfileStatus
} from 'components/Body/Profile/ProfileInfo/ProfileStatus/ProfileStatus'
import {useAppDispatch, useAppSelector} from 'hooks/hooks'
import {getId} from 'redux/authSelectors'
import {useParams} from 'react-router-dom'
import {updatePhoto} from 'redux/profileReducer'

export const ProfileInfo = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(getProfile)
  const authUserId = useAppSelector(getId)
  const {userId} = useParams()
  if (!profile) {
    return <Preload/>
  }

  const updatePhotoHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      dispatch(updatePhoto(e.target.files[0]))
    }
  }

  return (
    <div>
      <img src={profile.photos.large || mainPhoto} alt="avatar"
           className={styles.mainPhoto}/>
      {Number(userId) === authUserId &&
          <input type={'file'} onChange={updatePhotoHandle}/>}
      <ProfileStatus/>

      <h2>{profile.fullName}</h2>
      <p>
        <b>About me: </b>
      </p>
      <p>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? <span>{profile.lookingForAJobDescription}</span> :
          <span>no</span>}
      </p>
      <div>
        <b>Contacts:</b>
        {profile.contacts.facebook && <p><b>FaceBook:</b> {profile.contacts.facebook}</p>}
        {profile.contacts.website && <p><b>Web-site:</b> {profile.contacts.website}</p>}
        {profile.contacts.vk && <p><b>Vk:</b> {profile.contacts.vk}</p>}
        {profile.contacts.twitter && <p><b>Twitter:</b> {profile.contacts.twitter}</p>}
        {profile.contacts.instagram &&
            <p><b>Instagram:</b> {profile.contacts.instagram}</p>}
        {profile.contacts.youtube && <p><b>YouTube:</b> {profile.contacts.youtube}</p>}
        {profile.contacts.github && <p><b>GitHub:</b> {profile.contacts.github}</p>}
        {profile.contacts.mainLink && <p><b>MainLink:</b> {profile.contacts.mainLink}</p>}
      </div>
    </div>
  )
}