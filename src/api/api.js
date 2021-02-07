import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY
  }
})

export const usersAPI = {
  getUsers: async (pageNumber = 1, pageSize = 5) => {
    const resp = await instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    return resp.data
  },
  followUser: async (id) => {
    const resp = await instance.post(`follow/${id}`, {},)
    return resp.data
  },
  unFollowUser: async (id) => {
    const resp = await instance.delete(`follow/${id}`)
    return resp.data
  }
}

export const authAPI = {
  auth: async () => {
    const resp = await instance.get(`auth/me`)
    return resp.data
  },
  login: async (login, password, rememberMe) => {
    const resp = await instance.post(`auth/login`, {
      email: login,
      password: password,
      rememberMe: rememberMe
    })
    return resp.data
  },
  logout: async () => {
    const resp = await instance.delete(`auth/login`)
    return resp.data
  }
}

export const profileAPI = {
  getProfile: async (userId = 14529) => {
    let resp = await instance.get(`profile/${userId}`)
    return resp.data
  },
  getStatus: async (userId = 14529) => {
    const resp = await instance.get(`profile/status/${userId}`)
    return resp.data
  },
  updateStatus: async (status) => {
    const resp = await instance.put(`profile/status`, {status: status})
    return resp
  }
}


