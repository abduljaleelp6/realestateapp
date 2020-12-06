import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
		const usr=localStorage.getItem('user_id');
		
    let men;
	let men1;
	let men2;

    if (usr!="") {

      men =  <Nav.Link href="/properties">Properties</Nav.Link>
	  men1 =  <Nav.Link href="/logout">Logout</Nav.Link>
	  men2 =  <Nav.Link href="/messages">Messages</Nav.Link>
    } else {

      men =  <Nav.Link href="/login">Login</Nav.Link>

    }
        return (
            <div>
                <header>
                    <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Realestate App</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                   <Nav.Link href="/register">Register</Nav.Link>
									
									{ men}
										{ men1}
										{ men2}
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                   
                                </Route>
                                <Route path="/logout">
								
                                    
                                </Route>
                                <Route path="/contact-us">
                                    
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
