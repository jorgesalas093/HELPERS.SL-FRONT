import { createHttp } from "./BaseService";

const http = createHttp(true);

export const getChat = (chatId) => {
  return http.get(`/chats/${chatId}`)
}

export const getAllChat = () => {
  return http.get("/chats")
}


export const createChat = (userId) => {
  return http.post(`/chats/${userId}`)
}

export const getMessages = () => {
  return http.get(`/message`)
}

export const createMessage = (chatId, body) => {
  return http.post(`/message/${chatId}`, body)
}