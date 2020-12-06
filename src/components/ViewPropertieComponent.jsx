import React, { Component } from 'react'
import PropertieServies from '../services/PropertieService'

class ViewPropertieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
			id: this.props.match.params.id,
			name: '',
			description: '',
			features: '',
			location: '',
			price: '',
			offer: '',
			type: 'single',
			user_id:'',
			img_url:'',
            
        }
    }

    componentDidMount(){
		 let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer,type: this.state.type};
       
        PropertieServies.createPropertie(propertie).then(res =>{
            let propertie = res.data;
                this.setState({name: propertie.name,
                    description: propertie.description,
                    features : propertie.features,
					location: propertie.location,
					price: propertie.price,
					offer: propertie.offer,
					user_id: propertie.user_id,
					img_url: propertie.img_url,
					
                });
        })
    }
	sendMessage(id){
        this.props.history.push('/add-message/${id}');
    }
    render() {
        return (
		
             <div className = "row">
			
			 <div className="col-md-6">
			  
    <div className="thumbnail">
				 
      <a href="#">
        <img src={this.state.img_url} alt="Lights" width="100%" heigth="300px;"/>
       
      </a>
	 
				
    </div>
            </div>  
 <div className="col-md-6">
   
      
       
        <div className="caption">
		<h3 className = "text-center"> Propertie Details</h3>
		<br/><br/>
          <p>Name : {this.state.name}</p>
          <p>Descrption :{this.state.description}</p>
          <p>Features :{this.state.features}</p>
          <p>Location :{this.state.location}</p>
          <p>Price : {this.state.price}</p>
		  <button onClick={ () => this.sendMessage(this.state.user_id)} type="button" className="btn btn-info btn-block">Send Message</button>
        </div>
      
	 
				
    
            </div>  			
            </div>
        )
    }
}

export default ViewPropertieComponent
