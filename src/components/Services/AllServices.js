import React, { Component } from 'react';
import Modal from 'react-modal'
import Box from '@material-ui/core/Box';
import '../../styles.css'

class AllServices extends Component {
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            id:'',
            Nom:'',
            Description:'',
            date:'',
        }
    }

    ShowModal(){
    
        return(
            <div className='main'>
                <Modal isOpen={this.state.modalVisible} closeTimeoutMS={500} DescriptionLabel="modal"
                    style={{
                        overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.8)'
                        },
                        content: {
                        position: 'absolute',
                        top: '100px',
                        left: '35%',
                        right: '35%',
                        bottom: '100px',
                        border: '1px solid black',
                        background: '#E0E0E0',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '0px'
                        }
                    }}>
                    {this.ContentModal()}
                </Modal>
    
            </div>
        )
    }

    ContentModal=()=>{
        return(
            <div>
            <div>
                <h3 style={{textAlign:'center'}}>Mise à jour du service</h3>
            </div>
                    <form style={{margin:20}}>
                        <div className='col-md-13' style={{marginBottom:15}}>
                            <label for='titre'>Nom</label>
                            <input type='text' className ="form-control" name='Titre'
                            placeholder={this.state.Nom} onChange={this.onChangeTitre} required />
                        </div>
                        <div className='form-group col-md-13 mb-3'>
                            <label for='Description'>Description</label>
                            <textarea value={this.state.value} className ="form-control" style={{height:80}}
                             placeholder={this.state.Description}  required/>
                        </div>
                        <div style={{marginLeft:'25%'}}>
                            <input type="submit" className="btn btn-primary" value="Envoyer" />
                            <button  style={{marginLeft:10}} onClick={()=>this.setState({modalVisible:false})}
                                className="btn btn-warning">Fermer</button>
                        </div>
                    </form>
            </div>
        )
    }
    
    render(){

      
        const Services = [
            {id: 1, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 2, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 3, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 4, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 5, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 6, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 7, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 8, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 9, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 10, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 11, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 12, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 13, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
            {id: 14, Nom: 'Aide support',Date:'12/05/2020',Description:'Nothing'},
          ];

          const content = Services.map((service) =>
            
                <tr onClick={
                    ()=>this.setState({
                        modalVisible:true,
                        id:service.id,
                        Nom:service.Nom,
                        date:service.Date,
                        Description:service.Description
                        })}>
                    <th scope="row">{service.id}</th>
                    <td>{service.Nom}</td>
                    <td>{service.Date}</td>
                    <td>{service.Description}</td>
                </tr>
           
          );

         
        function showTable(){

            
              if(Services.length <=8 && Services.length>=1){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                }
              if(Services.length>8){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                                <tfoot style={{backgroundColor:'orange'}}>
                                    <tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                )
              }
            }
          
        return (
            <div className="main">
                <div style={{textAlign:'center',marginBottom:20}}>
                    <h3>Mes services</h3>
                    <p>Ici vous pouvez voir tous les services que vous avez créé</p>
                </div>
                {showTable()}
                {this.ShowModal()}
            </div>
        );
    }
}

export default AllServices