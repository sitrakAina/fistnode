import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Ajout from './Ajout'

import './List.css';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
    componentDidMount() {
      fetch("http://localhost:8080/list")
        .then(res => res.json())
        .then(
          (result) => {
            setTimeout(() => { 
              this.setState({
                isLoaded: true,
                items: result
              });         
              console.log(result)
            },1000)
            
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  
    render() {
      const { error, isLoaded, items} = this.state;
      if (error) {
        return <div>{console.log(error.message)}</div>;
      }else if (!isLoaded) {
        return <div className="spinner-border text-danger" role="status" id="spinner">
                  <span className="sr-only">Loading...</span>
                </div>;
      } else {
        return (
          <div className="container">
            <div className="formule">
              <Ajout/>
            </div> 
              <div>
                  

                <div id="affiche" >
                  <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { (items.length > 0)? items.map(item =>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nom.charAt(0).toUpperCase() + item.nom.substring(1).toLowerCase()}</td>
                        <td>{item.prenom}</td>
                        <td><button onClick = {()=>{
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <div className="border">
                                  <form method="POST" action="http://localhost:8080/list?_method=PUT" enctype="application/x-www-form-urlencoded" id="edit">
                                    <input type="hidden" name="_method" value="PUT"/>
                                    <input type="text" name="nom" placeholder={item.nom}/><br/><br/>
                                    <input type="text" name="prenom" placeholder={item.prenom}/><br/><br/>
                                    <input type="hidden" name="id" value={item.id}/>
                                    <button class="btn btn-outline-success" >
                                      OK
                                    </button>
                                    <button onClick={onClose} class="btn btn-outline-info" id="ok">Annuler</button>
                                  </form>
                                </div>
                              );
                            }
                          });
                        }} className="btn btn-success">Edit</button>
                        <button onClick = {()=>{
                          confirmAlert({
                          customUI: ({ onClose }) => {
                            return (
                              <div class="border">
                                <form method="POST" action="http://localhost:8080/list?_method=DELETE" enctype="application/x-www-form-urlencoded" id="edit">
                                  <input type="hidden" name="_method" value="DELETE"/>
                                  
                                  <input type="hidden" name="id" value={item.id}/>
                                  <span id="text">confirmer supression<br/>{item.nom + ' '+item.prenom}</span>
                                  <br/><br/>
                                  <button className="btn btn-outline-danger" >
                                    OUI
                                  </button>
                                  <button onClick={onClose} className="btn btn-outline-info" id="ok">NON</button>
                                </form>
                              </div>
                            );
                          }
                        });
                        }} className="btn btn-danger" id="supre">
                            <span aria-hidden="true">&times;</span>
                        </button></td>
                        </tr>
                      )):(<tr></tr>)}
                    </tbody>
                  </table>
                </div> 
              </div>
          </div>
        );
      }
    }
  }
  export default List 