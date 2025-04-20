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

//PUT   (update user habits)
export const updateUserHabitsApi = async (reqBody) => {
    return await commonApi('PUT', `${serverurl}/alluserhabits/${reqBody.id}`,reqBody);
};

//POST
export const createActivityHistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/alluserhistory`, reqBody);
};

//Blog component-cards
export const getBlogDetailsApi = async (id) => {
    return await commonApi('GET' , `${serverurl}/blogs`,[])
}

export const fetchAllUserHistoryApi = async (username) => {
    if (username){
        console.log(username)
        return await commonApi('GET', `${serverurl}/alluserhistory/${username}`);
    }
    console.log('fetch all history')
    return await commonApi('GET', `${serverurl}/alluserhistory`);
};

export const updateAllUserHistoryApi = async (reqBody) => {
    return await commonApi('PUT', `${serverurl}/alluserhistory/${reqBody.id}`, reqBody);
};

//PATCH Activity history
export const patchHistoryApi  = async (reqBody) => {
    return await commonApi('PATCH', `${serverurl}/alluserhistory/${reqBody.id}`, reqBody)
}

export const createActivityApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/activities`, reqBody);
};

export const fetchAllActivitiesApi = async () => {
    return await commonApi('GET', `${serverurl}/activities`);
};

export const createUserApi = async(reqBody) => {
	return await commonApi('POST' , `${serverurl}/` , reqBody);
};

