import axios from 'axios'

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

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type getUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    followed: boolean
}
export type getProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string

    }
}
type getAuthMeResponseType = {
    id: number
    email: string
    login: string
}

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '38a59e07-59b4-45d3-8d3c-f82bb3a752f7'
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(
            `users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get<getProfileResponseType>((`profile/${userId}`))
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<getAuthMeResponseType>>(`auth/me`)
    }
}
