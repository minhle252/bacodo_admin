import axios from "axios";
import { getSessionData } from "./sessionStorage";

const CONSTANTS = {
	URL_CONFIG: "https://apisv.bacodo.com/",
    setObjectData: async function (object:any,upload:string = '',type:string = 'token'){
		let token;
		if(type == 'token'){
			token = await getSessionData('token');
		}
		return await axios(
			{
				...object,
				withCredentials: true,
				headers: {
					"Content-Type": !upload?"application/json":"multipart/form-data",
					'Authorization': `${token ? `Bearer ${token}` : ''}`
				},
			}
		)
	},
}

export default CONSTANTS;