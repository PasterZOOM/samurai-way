import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

export const NewsForRedirect = () => {
    return (
        <div>
            News
        </div>
    )
}

export const News = withAuthRedirect(NewsForRedirect)