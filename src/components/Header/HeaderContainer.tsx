import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserDate} from '../../redux/authReduser';
import {StoreType} from '../../redux/reduxStore';

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    setAuthUserDate: (userId: string, email: string, login: string) => void
}

type HeaderRequestContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderRequestContainer extends React.Component<HeaderRequestContainerType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDate(id, email, login)
                }
            })
    }

    render() {
        return <Header setAuthUserDate={this.props.setAuthUserDate}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDate})(HeaderRequestContainer)