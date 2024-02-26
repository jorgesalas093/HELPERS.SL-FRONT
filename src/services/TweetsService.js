import { createHttp } from "./BaseService";

const http = createHttp(true);

export const getComments = (id) => {
  return http.get(`/comment/${id}`)
}

export const createComment = (id, text) => {
  return http.post(`/comment/${id}`, { text })
}


//TOCA MIRAR SI SE PUEDE APROVECHAR PARA LOS COMENTARIOS
