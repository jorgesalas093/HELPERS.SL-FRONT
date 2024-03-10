import { createHttp } from "./BaseService";

const http = createHttp(true)


export const getLikesProfile = (userId) => {
    return http.get(`/rate/${userId}`)
}


const postLikeProfile = (receiverId, rate, currentUserId) => {
    return http.post(`/rate/${receiverId}`, { rate, currentUserId });
}

export default postLikeProfile;
