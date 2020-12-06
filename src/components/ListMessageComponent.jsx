import React, { Component } from 'react'
import API_Service from '../services/API_Service';

class ListMessageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
				id: this.props.match.params.id,
				name: '',
				description: '',
				type: '',
				userid:localStorage.getItem('user_id'),
                properties: []
        }
        this.addPropertie = this.addPropertie.bind(this);
       
        this.deletePropertie = this.deletePropertie.bind(this);
    }

    deletePropertie(id){
       let msgs = {pid: this.state.id,name: this.state.name, description: this.state.description,type: 'delete', userid: this.state.userid};
        API_Service.createMessage(msgs).then((res) => {
            this.setState({properties: this.state.properties.filter(propertie => propertie.id !== id)});
        });
    }
   
   

    componentDidMount(){
		let msgs = {pid: this.state.id,name: this.state.name, description: this.state.description,type: 'all', userid: this.state.userid};
        API_Service.createMessage(msgs).then((res) => {
            this.setState({ properties: res.data});
        });
    }

    addPropertie(){
        this.props.history.push('/add-message/_add');
    }

    render() {
        return (
            <div>
			{localStorage.getItem('user_id')}
                 <h2 className="text-center">Messages</h2>
                 
                 <br></br>
                 <div className = "row">
				 
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Headline</th>
                                    <th>Content</th>
									
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.properties.map(
                                        propertie => 
                                        <tr key = {propertie.id}>
                                               
                                             <td> {propertie.headline}</td>
											 <td> {propertie.description} </td> 
											
                                             
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePropertie(propertie.id)} className="btn btn-danger">Delete </button>
                                                
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

export default ListMessageComponent
