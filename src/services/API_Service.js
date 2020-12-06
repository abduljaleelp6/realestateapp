import axios from 'axios';

const API_BASE_URL = "http://localhost:3003";

class API_Service {

   

    createPropertie(propertie)
	{
        return axios.post(API_BASE_URL + '/properties', propertie);
	
    }
	createMessage(message)
	{
        return axios.post(API_BASE_URL + '/messages', message);
	
    }
	createLogin(login){
		
        return axios.post(API_BASE_URL + '/login', login);
    }
		
   
}

export default new API_Service()