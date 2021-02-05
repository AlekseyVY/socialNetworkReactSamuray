import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY
  }
})

export const usersAPI = {
  getUsers: (pageNumber = 1, pageSize = 5) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    .then(resp => {
      return resp.data
    })
  },
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

export const authAPI = {
  auth: () => {
    return instance.get(`auth/me`)
    .then(resp => {
      return resp.data
    })
  },
  login: (login, password, rememberMe) => {
    return instance.post(`auth/login`, {
      email: login,
      password: password,
      rememberMe: rememberMe
    })
      .then(resp => {
        return resp.data
      })
  },
  logout: () => {
    return instance.delete(`auth/login`)
    .then((resp) => {
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
  },
  getStatus: (userId = 14529) => {
    return instance.get(`profile/status/${userId}`)
    .then(resp => {
      return resp.data
    })
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, {status: status})
    .then(resp => {
      return resp
    })
  }
}


