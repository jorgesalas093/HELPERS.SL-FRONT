import { createHttp } from "./BaseService";

const http = createHttp(true);

export const getChat = (chatId) => {
  return http.get(`/chats/${chatId}`)
}

export const createChat = (userId) => {
  return http.post(`/chats/${userId}`)
}

export const getMessages = () => {
    return http.get(`/message`)
  }
  
  export const createMessage = (chatId) => {
    return http.post(`/message/${chatId}`)
  }