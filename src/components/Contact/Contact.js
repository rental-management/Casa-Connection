import React, { Component } from 'react';
import NavBar from './../NavBar/NavBar';


class Contact extends Component{
    constructor(){
        super();

        this.state = {

        }
        
    }
            render(){
                return(
                    
                    <div className="main-container">
                        <NavBar/>
                       

                    <div id="bg-img">
                          
                       <span className="contact-container">
                       <form className="contact-form">

                                <h1 className="contact">CONTACT US</h1>
                                <span>
                                    <span><p style={{lineHeight: '50px'}}>GENERAL INQUIRIES: </p>
                                    <a style={{fontSize:"20px", fontWeight: 200, color:"#ff3776"}} href="mailto:casaconnectionmgmt@gmail.com?Subject=Hello%20Casa%20Connection ">  hello@CasaConnectionMgmt.com  </a></span>
                                    <p>1026 Valencia St,<span> San Francisco, CA 94110</span></p>
                                </span>
                        </form>
                            </span>
                        </div>
                        </div>
               
                )
            }
}
export default Contact;