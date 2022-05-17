import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import {StoreType} from '../../../redux/reduxStore';

export type mapStateToPropsType = {
    users: Array<UserType>
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return (
        {
            users: state.usersPage.users
        }
    )
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return (
        {
            follow: (userId: string) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId: string) => {
                dispatch(unfollowAC(userId))
            },
            setUsers: (users: Array<UserType>) => {
                dispatch(setUsersAC(users))
            }
        }
    )
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

