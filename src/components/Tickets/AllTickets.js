import React, { Component } from 'react';
import '../../styles.css'

class AllTickets extends Component {

    
    render(){

        const MyTickets = [
            {id: 1, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
            {id: 2, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 3, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
            {id: 4, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 5, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
            {id: 6, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 7, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 8, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 9, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
            {id: 10, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 11, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 12, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'En attente'},
            {id: 13, title: 'Bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
            {id: 14, title: 'bonjour, monde', Service: 'aide et support',Auteur:'cardoun07',Date:'12/05/2020',Etat:'résolu'},
          ];

          const content = MyTickets.map((ticket) =>
                <tr>
                    <th scope="row">{ticket.id}</th>
                    <td>{ticket.title}</td>
                    <td>{ticket.Service}</td>
                    <td>{ticket.Auteur}</td>
                    <td>{ticket.Date}</td>
                    <td>{ticket.Etat}</td>
                </tr>
        );
        return (
            <div className="main">
                <div style={{textAlign:'center',marginBottom:20}}>
                    <h3>Mes tickets</h3>
                    <p>Ici vous pouvez voir tous les tickets que vous avez créé</p>
                </div>

                <div className="container-fluid">
              
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
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
                    <tfoot>
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
            </div>
        );
    }
}

export default AllTickets