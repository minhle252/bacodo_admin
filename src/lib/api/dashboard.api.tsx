import CONSTANTS from "../constant";

const URL_API = `${CONSTANTS.URL_CONFIG}affiliate/`;

export const getStatsData = async ()=>{
    return await CONSTANTS.setObjectData({
		method: "GET",
		url: `${URL_API}dashboard/`,
	}).then((res)=> res.data);
}

