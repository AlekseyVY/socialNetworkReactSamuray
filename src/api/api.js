import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': "9e0ae487-73ea-4784-9bfc-7104c0689bd4"
  }
})

export const usersAPI = {
  getUsers: (pageNumber = 1, pageSize = 5) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    .then(resp => {
      return resp.data
    })
  }
}

export const authAPI = {
  auth: () => {
    return instance.get(`auth/me`)
    .then(resp => {
      return resp.data
    })
  }
}

export const profileAPI = {
  getProfile: (userId = 14529) => {
    return instance.get(`profile/${userId}`)
    .then(resp => {
      return resp.data
    })
  }
}

export const followAPI = {
  followUser: (id) => {
    return instance.post(`follow/${id}`,{},)
    .then(resp => {
      return resp.data
    })
  },
  unFollowUser: (id) => {
    return instance.delete(`follow/${id}`)
    .then(resp => {
      return resp.data
    })
  }
}


