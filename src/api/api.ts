import axios from 'axios';

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    uniqueUrlName?: string | null
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type getResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null,

    data:{
        id: number,
        email: string,
        login: string
    }
    resultCode: number,
    messages: Array<string>
}

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'f969fb73-d16f-48ed-9f38-3bf68d40ab5c'
        }
    }
)
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getResponseType>(
            `users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<getResponseType>(
            `follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<getResponseType>(
            `follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get((`profile/` + userId)
        )
    }
}

export const authAPI = {
    me() {
        return instance.get<getResponseType>(`auth/me`)
    }
}
