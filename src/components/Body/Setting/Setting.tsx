import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

export const SettingForRedirect = () => {
    return (
        <div>
            Setting
        </div>
    )
}
export const Setting = withAuthRedirect(SettingForRedirect)