import React, { Component } from 'react'
import PropertieService from '../services/PropertieService'

class ListPropertieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                properties: []
        }
        this.addPropertie = this.addPropertie.bind(this);
        this.editPropertie = this.editPropertie.bind(this);
        this.deletePropertie = this.deletePropertie.bind(this);
    }

    deletePropertie(id){
         let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer, type: 'delete', userid: this.state.userid};
        
           PropertieService.createPropertie(propertie).then(res =>{
            this.setState({properties: this.state.properties.filter(propertie => propertie.id !== id)});
        });
    }
    viewPropertie(id){
        this.props.history.push(`/view-propertie/${id}`);
    }
    editPropertie(id){
        this.props.history.push(`/add-propertie/${id}`);
    }

    componentDidMount(){
        let propertie = {pid: this.state.id,name: this.state.name, description: this.state.description, features: this.state.features,location: this.state.location, price: this.state.price, offer: this.state.offer, type: 'all', userid: this.state.userid};
        
           PropertieService.createPropertie(propertie).then(res =>{
            this.setState({ properties: res.data});
        });
    }

    addPropertie(){
        this.props.history.push('/add-propertie/_add');
    }

    render() {
        return (
            <div>
			Welcome User : {localStorage.getItem('username')}
                 <h2 className="text-center">Properties List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPropertie}> Add Propertie</button>
                 </div>
                 <br></br>
                 <div className = "row">
				 
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    
                                    <th>Features</th>
									<th>Location</th>
									<th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.properties.map(
                                        propertie => 
                                        <tr key = {propertie.id}>
                                               
                                             <td> {propertie.name}</td>
											 <td> {propertie.features} </td> 
											 <td> {propertie.location} </td> 
											 <td> {propertie.price} </td> 
                                             
                                             <td>
                                                 <button onClick={ () => this.editPropertie(propertie.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePropertie(propertie.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPropertie(propertie.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPropertieComponent
