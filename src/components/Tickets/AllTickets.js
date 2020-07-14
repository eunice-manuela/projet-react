import React, { Component } from 'react';
import Modal from 'react-modal'
import Box from '@material-ui/core/Box';
import axios from 'axios';
import '../../styles.css';

class AllTickets extends Component {

    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            tickets:[],
            id:'',
            title:'',
            service:'',
            auteur:'',
            date:'',
            etat:'',
            contenu:'',
            commentaire:'',
        }
    }


    //on recupère les données back end

    componentDidMount() {
        axios.get('http://localhost:8080/tickets')
          .then(res => {
            const tickets = res.data;
            this.setState({tickets: tickets  });
            console.log('tickets', tickets)
          })
          .catch(function (error) {
            console.log(error);
          });
      }






    ShowModal(){
    
        return(
            <div className='main'>
                <Modal isOpen={this.state.modalVisible} closeTimeoutMS={500} contentLabel="modal"
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
                        top: '40px',
                        left: '30%',
                        right: '30%',
                        bottom: '40px',
                        border: '1px solid black',
                        background: '#E0E0E0',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '0px'
                        }
                    }}>
                    {this.contentModal()}
                </Modal>
    
            </div>
        )
    }

    contentModal=()=>{
        return(
            <div>
                <div style={{backgroundColor:"black",height:30 ,margin:20}}>
                    
                    <h5 style={{textAlign:"center",paddingTop:5 ,color:'white'}}>
                     {this.state.title}</h5>
                </div>
                <div style={{ width: '100%' }}>

                <Box display="flex" flexDirection="row" p={1} m={1}
                 bgcolor="background.paper" justifyContent='space-between'>
                    <Box p={1} bgcolor="grey.300">
                        <Box style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:16}}>service </Box>
                        <Box style={{textAlign:"center"}}>{this.state.service}</Box>
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                        <Box style={{textAlign:'center',color:'black',fontWeight:'bold' ,fontSize:16}}>auteur </Box>
                        <Box style={{textAlign:"center"}}>{this.state.auteur}</Box>
                    </Box>
                    <Box  p={1} bgcolor="grey.300">
                        <Box style={{textAlign:'center',color:'black' ,fontWeight:'bold',fontSize:16}}>date de création</Box>
                        <Box style={{textAlign:"center"}}> {this.state.date}</Box>
                    </Box>
                    
                </Box>
                </div>
                <div>
                    <Box display="flex" flexDirection='column'  bgcolor="background.paper" p={1} m={1}>
                        <Box bgcolor="grey.300" style={{fontSize:16,fontWeight:"bold",textAlign:"center"}}>Description</Box>
                        <Box style={{marginTop:8}} >{this.state.contenu}</Box>
                    </Box>
                </div>
                <div>
                    <form style={{margin:20}}>
                    <div>
                    <Box display="flex" flexDirection='column'  bgcolor="background.paper" p={1} m={1}>
                        <Box bgcolor="grey.300" style={{fontSize:16,fontWeight:"bold",textAlign:"center"}}>Commentaire</Box>
                        <Box style={{marginTop:8}} >{this.state.commentaire}</Box>
                    </Box>
                </div>
                        <div style={{marginLeft:'30%'}}>
                            <input type="submit" className="btn btn-primary" value="Envoyer" />
                            <button  style={{marginLeft:10}} onClick={()=>this.setState({modalVisible:false})}
                                className="btn btn-warning">Fermer la fenêtre</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
    render(){

        const MyTickets = this.state.tickets
       
        
          const content = MyTickets.map((ticket) =>

        
            
                <tr onClick={
                    ()=>this.setState({
                        modalVisible:true,
                        id:ticket.id,
                        title:ticket.cas,
                        service:ticket.service,
                        auteur:ticket.client,
                        date:ticket.date_creation,
                        etat:ticket.etat,
                        contenu:ticket.contenu,
                        commentaire: ticket.commentaire,
                        })}>
                    <th scope="row">{ticket.id}</th>
                    <td>{ticket.cas}</td>
                    <td>{ticket.service}</td>
                    <td>{ticket.client}</td>
                    <td>{ticket.date_creation}</td>
                    <td>{ticket.etat}</td>
                </tr>
           
          );

         
        function showTable(){

            
             
              if(MyTickets.length ===0){
                  return(
                    <h5 style={{textAlign:'center',marginTop:100}}>
                        Aucun ticket dans cette rubrique</h5>
                  )
              }
              if(MyTickets.length <=8 && MyTickets.length>=1){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Auteur</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Etat</th>
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
              if(MyTickets.length>8){
                return (
                    <div className="container-fluid">
              
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-hover mb-0">
                                <thead style={{backgroundColor:'orange'}}>
                                    <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Auteur</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Etat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                                <tfoot style={{backgroundColor:'orange'}}>
                                    <tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Auteur</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Etat</th>
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
                    <h3>Mes tickets</h3>
                    <p>Ici vous pouvez voir tous les tickets que vous avez créé</p>
                </div>

                <Box display="flex" flexDirection="row" p={1} m={1}
                 bgcolor="background.paper" justifyContent='flex-start'>
                    <Box p={1} bgcolor="grey.300">
                        <div >
                            <input type='text' placeholder="Rechercher" className ="form-control" name='Search'
                            onChange={this.onChangeTitre} required />
                        </div>
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                        <input type="submit" className="btn btn-primary" value="Search" />
                    </Box>
                    
                </Box>



                {showTable()}
                {this.ShowModal()}
            </div>
        );
    }
}

export default AllTickets