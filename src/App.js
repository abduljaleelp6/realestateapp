import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ListPropertieComponent from './components/ListPropertieComponent';
import ListMessageComponent from './components/ListMessageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import CreatePropertieComponent from './components/CreatePropertieComponent';
import CreateMessageComponent from './components/CreateMessageComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ViewPropertieComponent from './components/ViewPropertieComponent';
import PropertieGallery from './components/PropertieGallery';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
        <Router>
             <HeaderComponent/>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {PropertieGallery}></Route>
                          <Route path = "/properties" component = {ListPropertieComponent}></Route>
                          <Route path = "/messages" component = {ListMessageComponent}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/logout" component = {Login}></Route>
                          <Route path = "/register" component = {Register}></Route>
                          <Route path = "/add-message/:id" component = {CreateMessageComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/add-propertie/:id" component = {CreatePropertieComponent}></Route>
                          <Route path = "/view-propertie/:id" component = {ViewPropertieComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
