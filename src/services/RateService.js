import { createHttp } from "./BaseService";

const http = createHttp(true)


export const getLikesProfile = (userId, currentUser) => {
    if (userId) {
        return http.get(`/rate/${userId}`)
    }

    if (currentUser) {
        return http.get(`/rate/${currentUser}`)
    }
}


const postLikeProfile = (receiverId, rate, currentUserId) => {
    return http.post(`/rate/${receiverId}`, { rate, currentUserId });
}

export default postLikeProfile;
