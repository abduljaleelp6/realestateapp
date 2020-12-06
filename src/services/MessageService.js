import axios from 'axios';

const MESSAGE_API_BASE_URL = "http://localhost:3003/messages";

class MessageService {

    getMessages(){
        return axios.get(MESSAGE_API_BASE_URL);
    }

    createMessage(message)
	{
        return axios.post(MESSAGE_API_BASE_URL, message);
	
    }
		
   
}

export default new MessageService()