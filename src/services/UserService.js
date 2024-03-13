import { createHttp } from "./BaseService";

const http = createHttp(true)

export const getCurrentUser = () => {
  return http.get('/users/me')
}

export const deleteCurrentUser = (id) => {
  return http.delete(`/users/${id}`)
}

export const getEnumTypeJob = () => {
  return http.get('/users/typesjob')
}

export const getUser = (id) => {
  return http.get(`/users/${id}`)
}

export const getAllUser = () => {
  return http.get(`/users`)
}

export const getTypeJobUser = (typejob) => {
  return http.get(`/users/jobs/${typejob}`)
}

export const EditCurrentUserProfile = (config) => {
  return http.put('/users/me', config);
};