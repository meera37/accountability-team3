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


//POST
export const createUserActivityApi = async(reqBody) => {
	return await commonApi('POST' , `${serverurl}/alluserhabits` , reqBody);
};

//GET
export const fetchSingleUserApi = async(user) => {
	return await commonApi('GET', `${serverurl}/alluserhabits/${user}` );
};

//PUT

//PATCH

//DELETE




