import {connect} from 'react-redux'
import {Users} from './Users'
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../../redux/usersReducer'
import {AppRootStateType} from '../../../redux/reduxStore'
import Preload from '../../command/Preload/Preload'
import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}

type UsersRequestContainerType = mapStateToPropsType & mapDispatchToPropsType

class UsersRequestContainer extends React.Component<UsersRequestContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preload/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress
        }
    )
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
    withAuthRedirect)(UsersRequestContainer)

