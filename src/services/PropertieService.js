import axios from 'axios';

const PROPERTIE_API_BASE_URL = "http://localhost:3003/properties";

class PropertieService {

    getProperties(){
        return axios.get(PROPERTIE_API_BASE_URL);
    }

    createPropertie(propertie)
	{
        return axios.post(PROPERTIE_API_BASE_URL, propertie);
	/*		axios.post("http://localhost:3003/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
	  return null;*/
    }
		
    getPropertieById(propertieId){
        return axios.put(PROPERTIE_API_BASE_URL + '/:propertieId',propertieId);
		
	
	   
    }

    updatePropertie(propertie, propertieId){
        return axios.put(PROPERTIE_API_BASE_URL + '/' + propertieId, propertie);
    }

    deletePropertie(propertieId){
        return axios.delete(PROPERTIE_API_BASE_URL + '/' + propertieId);
    }
}

export default new PropertieService()