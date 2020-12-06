import React, { Component } from 'react'
import LoginService from '../services/LoginService';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            username: '',
            password: '',
			email:'',
			type:'Insert'
            
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveLoginDetails = this.saveLoginDetails.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
       /* if(this.state.id === '_add'){
            return
        }else{
            LoginService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({username: employee.firstName,
                    password: employee.lastName
                    
                });
            });
        }  */      
    }
    saveLoginDetails = (e) => {
        e.preventDefault();
        let logdetails = {username: this.state.username,email:this.state.email, password: this.state.password, type: this.state.type};
        console.log('login => ' + JSON.stringify(logdetails));
		//this.props.history.push('/login');
		
       
            LoginService.createLogin(logdetails).then(res =>{
                this.props.history.push('/login');
            });
       
    }
    
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
	changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        
            return <h3 className="text-center">Register User</h3>
        
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
                                            <label> Username: </label>
                                            <input placeholder="Enter Username" name="username" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeUsernameHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Enter Email" name="email" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Enter Password" name="password" className="form-control" 
                                                value={this.state.lastName} onChange={this.changePasswordHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.saveLoginDetails}>Regsiter</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Register
