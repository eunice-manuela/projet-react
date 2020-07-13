import React, { Component } from 'react';
import '../../styles.css'

class GestionAdmin extends Component {

    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            id:'',
            Nom:'',
            Services:'',
        }
    }

    render(){
        const Admins = [
            {id: 1, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 2, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 3, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 4, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 5, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 6, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
            {id: 7, Nom: 'Mathieu Canthon Pirouette',Services:'aide support'},
          ];

          const content = Admins.map((admin) =>
            
                <tr onClick={
                    ()=>this.setState({
                        modalVisible:true,
                        id:Admins.id,
                        Nom:Admins.Nom,
                        Services:Admins.Services
                        })}>
                    <th scope="row">{admin.id}</th>
                    <td>{admin.Nom}</td>
                    <td>{admin.Services}</td>
                </tr>
           
          );

         
        function showTable(){

            
              if(Admins.length <=8 && Admins.length>=1){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Service</th>
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
              if(Admins.length>8){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                                <tfoot style={{backgroundColor:'orange'}}>
                                    <tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Service</th>
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
                    <h3>administrateurs</h3>
                    <p>Liste de tous les administrateurs</p>
                </div>
                {showTable()}
            </div>
        );
    }
}

export default GestionAdmin