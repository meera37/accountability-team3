import { serverurl } from "./serverurl"
import { commonApi } from "./commonApi"
import { common } from "@mui/material/colors";

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

//PATCH
export const patchUserHabitListApi = async(reqBody) => {
    return await commonApi('PATCH',`${serverurl}/alluserhabits/${reqBody.id}`,reqBody)
}

//POST
export const createActivityHistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/alluserhistory`, reqBody);
};

//Blog component-cards
export const getBlogDetailsApi = async () => {
    return await commonApi('GET' , `${serverurl}/blogs`,[])
}

export const fetchAllUserHistoryApi = async (username) => {
    if (username){
        return await commonApi('GET', `${serverurl}/alluserhistory/${username}`);
    }
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

//delete if unused
export const addToUsernameApi = async(reqBody) => {
    return await commonApi('PUT',`${serverurl}/usernames/`, reqBody)
}

//post profilepicture
export const createPictureApi = async(reqBody) => {
    return await commonApi('POST',`${serverurl}/profilepicture/`,reqBody)
}

export const setProfilePictureApi = async(reqBody) => {
    return await commonApi('PUT',`${serverurl}/profilepicture/${reqBody.id}`,reqBody)
};

export const profilePicChangeApi = async(username) => {
    return await commonApi('GET',`${serverurl}/profilepicture/${username}`)
};

