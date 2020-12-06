import React, { Component } from 'react'
import API_Service from '../services/API_Service';
import axios from 'axios';
class CreateMessageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
			
            id: this.props.match.params.id,
			name: '',
			description: '',
			type: '',
			userid:localStorage.getItem('user_id'),
			
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
       
        this.saveOrUpdateMessage = this.saveOrUpdateMessage.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
              
    }
	
    saveOrUpdateMessage = (e) => {
        e.preventDefault();
		
       

       
	    let msgs = {pid: this.state.id,name: this.state.name, description: this.state.description,type: 'insert', userid: this.state.userid};
		
            API_Service.createMessage(msgs).then(res =>{
                this.props.history.push('/');
            });
        
    }
     
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    descriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

	

    cancel(){
        this.props.history.push('/properties');
    }
	

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Send Message</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label> Headline: </label>
                                            <input placeholder="Headline" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Content </label>
                                            <input placeholder="Content" name="features" className="form-control" 
                                                value={this.state.features} onChange={this.descriptionHandler}/>
                                        </div>
										 

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMessage}>Send</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
										
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateMessageComponent
