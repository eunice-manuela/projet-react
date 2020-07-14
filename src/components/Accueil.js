import React, {Component} from 'react';
import Modal from 'react-modal'
import { HashRouter as Router, Route,NavLink} from 'react-router-dom';
import '../styles.css';
import image from '../images/ampoule.jpg'
import axios from 'axios';
import Box from '@material-ui/core/Box';


export var isLogin=false;
export var isUser =false;
export class Accueil extends Component {

    constructor(){
        super()
        this.state={
            modalVisible:false,
            isLogin:false,
        }
    }
    isUser =()=>{
        isLogin=true;
        isUser = true;
    }
    isAdmin = () => {
        isLogin=true;
    }

    render(){
        return(

            <div
            class="bg_image"
            style={{
              backgroundColor:"blue",
              height: "70vh",
              color: "#f5f5f5"
            }}
          >
           
        <Box display="flex" flexDirection="row" p={1} m={1} style={{height:300, marginTop:150}}
            bgcolor="background.paper" justifyContent='center'>
            <Box p={1} bgcolor="grey.300" style={{width:200,marginRight:50, borderRadius:10}}>
                <Box style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:16}}>service </Box>
                <Box style={{textAlign:"center"}}>{this.state.service}</Box>
            </Box>
            <Box p={1} bgcolor="grey.300" style={{width:200, marginRight:50, borderRadius:10}}>
                <Box style={{textAlign:'center',color:'black',fontWeight:'bold' ,fontSize:16}}>auteur </Box>
                <Box style={{textAlign:"center"}}>{this.state.auteur}</Box>
            </Box>
            <Box  p={1} bgcolor="grey.300" style={{width:200,  borderRadius:10}}>
                <Box style={{textAlign:'center',color:'black' ,fontWeight:'bold',fontSize:16}}>date de création</Box>
                <Box style={{textAlign:"center"}}> {this.state.date}</Box>
            </Box>
            
        </Box>
        </div>
        );
    }
}

 