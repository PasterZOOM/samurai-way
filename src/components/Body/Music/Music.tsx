import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

export const MusicForRedirect = () => {
    return (
        <div>
            Music
        </div>
    )
}

export const Music = withAuthRedirect(MusicForRedirect)