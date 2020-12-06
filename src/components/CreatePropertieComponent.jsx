import React, { Component } from 'react'
import PropertieService from '../services/PropertieService';
import axios from 'axios';
class CreatePropertieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
			
            id: this.props.match.params.id,
			name: '',
			description: '',
			features: '',
			location: '',
			price: '',
			offer: '',
			type: '',
			userid:localStorage.getItem('user_id'),
			selectedFile: null
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.featuresHandler = this.featuresHandler.bind(this);
        this.locationHandler = this.locationHandler.bind(this);
        this.priceHandler =this.priceHandler.bind(this);
        this.offerHandler =this.offerHandler.bind(this);
        this.saveOrUpdatePropertie = this.saveOrUpdatePropertie.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
		 let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer, type: 'single', userid: this.state.userid};
        
           PropertieService.createPropertie(propertie).then(res =>{
                let propertie = res.data;
                this.setState({name: propertie.name,
                    description: propertie.description,
                    features : propertie.features,
					location: propertie.location,
					price: propertie.price,
					offer: propertie.offer,
					
                });
            });
        }        
    }
	onClickHandler = () => {
   const data = new FormData()
   data.append('file', this.state.selectedFile)
   axios.post("http://localhost:3003/upload", data, { 
      // receive two    parameter endpoint url ,form data
  }).then(res => { // then print response status
    console.log(res.statusText)
 })
}
    saveOrUpdatePropertie = (e) => {
        e.preventDefault();
		
       

        // step 5
        if(this.state.id === '_add'){
	    let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer, type: 'insert',userid: this.state.userid};
        console.log('propertie => ' + JSON.stringify(propertie));
            PropertieService.createPropertie(propertie).then(res =>{
                this.props.history.push('/properties');
            });
        }else{
			 let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer, type: 'update',userid: this.state.userid};
        
            PropertieService.createPropertie(propertie).then(res =>{
                this.props.history.push('/properties');
            });
        }
    }
     
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    descriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
featuresHandler= (event) => {
        this.setState({features: event.target.value});
    }
    locationHandler= (event) => {
        this.setState({location: event.target.value});
    }
	priceHandler= (event) => {
        this.setState({price: event.target.value});
    }
	offerHandler= (event) => {
        this.setState({offer: event.target.value});
    }
	

    cancel(){
        this.props.history.push('/properties');
    }
	onChangeHandler=event=>
	{
		console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
	}

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Propertie</h3>
        }else{
            return <h3 className="text-center">Update Propertie</h3>
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
                                            <label> Propertie Name: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
										<div className = "form-group">
                                           
                                            <input type="file" name="file" onChange={this.onChangeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.descriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Features </label>
                                            <input placeholder="Features" name="features" className="form-control" 
                                                value={this.state.features} onChange={this.featuresHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> Location </label>
                                            <input placeholder="Location" name="features" className="form-control" 
                                                value={this.state.location} onChange={this.locationHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> Price </label>
                                            <input placeholder="Price" name="features" className="form-control" 
                                                value={this.state.price} onChange={this.priceHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> Offer </label>
                                            <input placeholder="Offer" name="features" className="form-control" 
                                                value={this.state.offer} onChange={this.offerHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePropertie}>Save</button>
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

export default CreatePropertieComponent
