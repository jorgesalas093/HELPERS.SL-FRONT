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

export const EditCurrentUserProfile = (avatar, username, email, biography, birthday, typejob) => {
  const body = {};
  
  switch (true) {
    case !!avatar:
      body.avatar = avatar;
      break;
    case !!username:
      body.username = username;
      break;
    case !!email:
      body.email = email;
      break;
    case !!biography:
      body.biography = biography;
      break;
    case !!birthday:
      body.birthday = birthday;
      break;
    case !!typejob:
      body.typejob = typejob;
      break;
    default:
      break;
  }

  return http.put('/users/me', body);
};

