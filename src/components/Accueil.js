import React, {Component} from 'react';
import Modal from 'react-modal'
import '../styles.css';

class Accueil extends Component {

    constructor(){
        super()
        this.state={
            modalVisible:false
        }
    }

    render(){
        return(
            <div>
                <h1>Accueil</h1>
            </div>
        );
    }
}

export default Accueil 