import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-default" id='navbar'style={{
                    
                marginTop:0,
                marginLeft:0,
                marginRight:0,
                marginBottom:0,
                height:52,
            }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" style={{fontSize:22,
                            color:'black',fontWeight:'bold'}} href="#">TECH SUPPORT</a>
                    </div>
                    <div className="collapse navbar-collapse" 
                        id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right ul"  >
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink exact to="/">Accueil</NavLink>
                            </li>
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink to="/Tickets">Tickets</NavLink>
                            </li>
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink to="/Staff">Administrateurs</NavLink>
                            </li>
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink to="/Services">Services</NavLink>
                            </li>
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink to="/notifications">Notifications</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{
                        height:20,
                        backgroundColor:'orange',
                        marginBottom:45,
                        }}></div>
            </nav>
        );
    }
}

export default Navbar