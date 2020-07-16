import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';
import { isLoginAdmin,isLogin,isLoginClient } from './Accueil';

class Navbar extends Component {


    constructor(){
        super()
        this.state={
            isLogin:false,
            isLoginAdmin:false,
            isLoginClient:false,
        }
    }

    UNSAFE_componentWillReceiveProps() {
    
        if (isLogin!=this.state.isLogin || isLoginAdmin!=this.state.isLoginAdmin 
            || isLoginClient!=this.state.isLoginClient) {
          this.setState({
            isLogin:isLogin,
            isLoginAdmin:isLoginAdmin,
            isLoginClient:isLoginClient,
          });
        }
      }
    deconnexion=()=>{
        this.setState({
            isLogin:false,
            isLoginAdmin:false,
            isLoginClient:false,
        })
        window.location.reload(false);
    }

     refreshNavBar=()=> {
         this.setState({
            isLogin:isLogin,
            isLoginAdmin:isLoginAdmin,
            isLoginClient:isLoginClient,
          });
      }
    IsLogin=()=>{
        if(this.state.isLogin){

            if(this.state.isLoginAdmin){
                return(
                    <>
                        <li className="li_nav" activeClassName="main-nav">
                            <NavLink to="/Tickets">Tickets</NavLink>
                        </li>
                        <li className="li_nav" activeClassName="main-nav">
                            <NavLink to="/Staff">Administration</NavLink>
                        </li>
                        <li className="li_nav" activeClassName="main-nav">
                            <NavLink to="/Services">Services</NavLink>
                        </li>
                        <button onClick={this.deconnexion} style={{border:'none'}} >
                             <a className="navbar-brand" style={{fontSize:12,
                                color:'black',fontWeight:'bold',marginLeft:10}}>Deconnexion</a>
                        </button>
                    </>
                )
            }
            if(this.state.isLoginClient){
                return(
                    <>
                        <li className="li_nav" activeClassName="main-nav">
                            <NavLink to="/Tickets">Tickets</NavLink>
                        </li>
                        <button onClick={this.deconnexion} style={{border:'none'}} >
                             <a className="navbar-brand" style={{fontSize:12,
                                color:'black',fontWeight:'bold',marginLeft:10}}>Deconnexion</a>
                        </button>
                    </>
                )
            }
        }
    }
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
                    <button onClick={this.refreshNavBar} style={{marginLeft:-15,height:50,border:'none'}} >
                    <a className="navbar-brand" style={{fontSize:22,
                            color:'black',fontWeight:'bold',marginLeft:10}}>TECH SUPPORT</a>
                    </button>
                        
                    </div>
                    <div className="collapse navbar-collapse" 
                        id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right ul"  >
                            <li className="li_nav" activeClassName="main-nav">
                                <NavLink exact to="/">Accueil</NavLink>
                            </li>
                            
                            {this.IsLogin()}

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