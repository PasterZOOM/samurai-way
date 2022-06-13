import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDate} from '../../redux/authReduser';
import {AppRootStateType} from '../../redux/reduxStore';

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    getAuthUserDate: () => void
}

type HeaderRequestContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderRequestContainer extends React.Component<HeaderRequestContainerType> {
    componentDidMount() {
        this.props.getAuthUserDate()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {getAuthUserDate})(HeaderRequestContainer)