import React, { Component } from 'react'
import LoginService from '../services/LoginService';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
             username: '',
            password: '',
			email:'',
			type:'checkuser'
            
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.getLoginDetails = this.getLoginDetails.bind(this);
    }

    // step 3
    componentDidMount(){
		localStorage.removeItem('user_id');
		localStorage.clear();
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
    getLoginDetails = (e) => {
        e.preventDefault();
        let logindetails = {username: this.state.username,email:this.state.email, password: this.state.password, type: this.state.type};
        //console.log('login => ' + JSON.stringify(logindetails));
		//this.props.history.push('/properties');
		
        // step 5
      
           LoginService.createLogin(logindetails).then(res =>{
				console.log('result => ' + res);
				let log_details = res.data;
				localStorage.setItem('user_id', ''+log_details.id);
				localStorage.setItem('username', ''+log_details.username);
				//localStorage.setItem('user_id', '1');
                this.props.history.push('/properties');
            });
       
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
        
            return <h3 className="text-center">Login</h3>
        
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
                                            <label> Email: </label>
                                            <input placeholder="Enter Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Enter Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                       

                                        <button type="button" className="btn btn-info btn-block" onClick={this.getLoginDetails}>Login</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Login
