import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:3003/login";

class LoginService {

    getLogin(){
        return axios.get(LOGIN_API_BASE_URL);
    }

    createLogin(login){
		
        return axios.post(LOGIN_API_BASE_URL, login);
    }

    getLoginById(loginId){
        return axios.get(LOGIN_API_BASE_URL + '/' + loginId);
    }

    updateLogin(login, loginId){
        return axios.put(LOGIN_API_BASE_URL + '/' + loginId, login);
    }

    deleteLogin(loginId){
        return axios.delete(LOGIN_API_BASE_URL + '/' + loginId);
    }
}

export default new LoginService()