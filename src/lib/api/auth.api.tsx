import CONSTANTS from "../constant";

const URL_API = `${CONSTANTS.URL_CONFIG}login/`;

export const loginService = async (data:object)=>{
    return await CONSTANTS.setObjectData({
		method: "POST",
		url: `${URL_API}email/`,
		data,
	},'').then((res)=> res.data);
}

