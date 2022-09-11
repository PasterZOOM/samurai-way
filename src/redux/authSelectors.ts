import {AppRootStateType} from './reduxStore'

export const getId = (state: AppRootStateType): number => state.auth.id
export const getLogin = (state: AppRootStateType): string => state.auth.login
export const getIsAuth = (state: AppRootStateType): boolean => state.auth.isAuth