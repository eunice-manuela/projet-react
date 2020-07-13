import React, { Component } from 'react';
import '../../styles.css';
import axios from 'axios';

class NewServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Nom: '',
          Description:'',
        };
      }
      onChangeNom = (event) => {
        this.setState({Nom: event.target.value});
      }
      onChangeDescription = (event) => {
        this.setState({Description: event.target.value});
      }
      onCancel=()=>{
        this.setState({
          Nom:'',
          Description:'',
        })
      }

      onSendService=()=>{
          let newServices={
              Nom : this.state.Nom,
              Description: this.state.Description,
          }
          alert('Nom '+ newServices.Nom +' Description '+newServices.Description)
          axios.post('', { newServices })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
      }
      render() {
        return (
        <div className='main'>

          <div style={{textAlign:'center', marginRight:50,marginBottom:20}}>
            <h3 >Création d'un nouveau Service</h3>
            <p>Les Services sont utilisés pour classer les Services.</p>
          </div>


          <form onSubmit={this.onSendService} className="needs-validation" novalidate>
            <div className="form-row">
              <div className='col-md-12'>
                <label for='Nom'>Entrer le nom du Service</label>
                <input type='text' className ="form-control" name='Nom'
                  onChange={this.onChangeNom} required />
              </div>
            </div>
            <div className='form-group col-md-12 mb-3' style={{marginTop:20}}>
              <label for='Description'>Description</label>
              <textarea value={this.state.value} className ="form-control" style={{height:150}}
                        onChange={this.onChangeDescription} required/>
            </div>
            <div style={{marginLeft:'40%'}}>
            <input type="submit" className="btn btn-primary" value="Créer" />
            <button style={{marginLeft:10}} onClick={this.onCancel} className="btn btn-danger">Annuler</button>
            </div>
          </form>
         
          </div>
        );
      }
}

export default NewServices