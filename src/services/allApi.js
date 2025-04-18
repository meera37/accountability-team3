import { serverurl } from "./serverurl"
import { commonApi } from "./commonApi"

//register component
export const registerUserApi = async (reqBody)=>{
    return await commonApi('POST', `${serverurl}/users`, reqBody)
}

export const getAllUsersApi = async () => {
    return await commonApi('GET', `${serverurl}/users`);
    
  };

//login component
  export const loginUserApi = async () => {
    const response = await commonApi('GET', `${serverurl}/users`);
    return response.data;
  
    
  };
  