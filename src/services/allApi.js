import { serverurl } from "./serverurl"
import { commonApi } from "./commonApi"

export const registerUserApi = async (reqBody)=>{
    return await commonApi('POST', `${serverurl}/users`, reqBody)
}

export const getAllUsersApi = async () => {
    return await commonApi('GET', `${serverurl}/users`);
  };