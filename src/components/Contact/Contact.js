import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './../NavBar/NavBar';

class Contact extends Component{
    constructor(){
        super();

        this.state = {

        }
        
    }
            render(){
                return(
                    <div>
                        <NavBar/>
                        <h1> Contact </h1>
                        </div>
                )
            }
}
export default Contact;