import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  

import ListPropertieComponent from './ListPropertieComponent';
import CreatePropertieComponent from './CreatePropertieComponent';
class BootstrapNavbar extends React.Component{

    render(){
        return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" onClick="" alt="small post" height="300px;"></img>
            <div>hhh</div>
          </div>
		  <div className="col-md-4">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" onClick="" alt="small post" height="300px;"></img>
            <div>hhh</div>
          </div>
		  <div className="col-md-4">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" onClick="" alt="small post" height="300px;"></img>
            <div>hhh</div>
          </div>
        </div>
      </div>
        )  
    }
}

export default BootstrapNavbar;