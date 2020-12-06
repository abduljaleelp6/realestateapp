import React, { Component } from 'react'
import PropertieServies from '../services/PropertieService'
import Carousel from 'react-bootstrap/Carousel'
class PropertieGallery extends Component {
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
        PropertieServies.deletePropertie(id).then( res => {
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
        PropertieServies.getProperties().then((res) => {
            this.setState({ properties: res.data});
        });
    }

    addPropertie(){
        this.props.history.push('/add-propertie/_add');
    }

    render() {
        return (
		
            <div>
			<Carousel height="100px">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/img/slider2.jpg`}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We are Expert</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/img/slider1.jpg`}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Most Trusted</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/img/slider2.jpg`}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Excellent</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                 <h2 className="text-center">Properties List</h2>
                 
                 <div className = "row">
                      

                          
                                {
                                    this.state.properties.map(
                                        propertie => 
										<div className="col-md-4">
										<br/>
										<div className="thumbnail">
     
        <img src={propertie.img_url} alt="Lights" width="100%" height="300px"/>
        <div className="caption">
          <p style={{"text-align": "center"}}><b style={{"font-szie:15px;": "center"}}>Name {propertie.name}</b>
		  <br/>
		  Location {propertie.location}</p>
		  <button onClick={ () => this.viewPropertie(propertie.id)} type="button" className="btn btn-info btn-block">View Details</button>
        </div>
      
    </div>
  </div>
                                       
                                    )
                                }
                          

                 </div>
				<div className = "row">
				
				<h4 className="text-center">About Us</h4>
				
				<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
				</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sae!4v1607166876255!5m2!1sen!2sae" width="100%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 

            </div>
        )
    }
}

export default PropertieGallery
