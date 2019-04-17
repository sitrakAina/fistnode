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
            this.setState({
              isLoaded: true,
              items: result
            });         
            console.log(result)
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
      const { error, items} = this.state;
      if (error) {
        return <div>{console.log(error.message)}</div>;
      }else {
        return (
          <div className="container">
            <div className="formule">
              <Ajout/>
            </div> 
              <div>
                  <button type="button" onClick={()=>{
                    let aff = document.getElementById('affiche');
                    aff.style.display = 'block';
                    /*console.log(this.state.items)
                    for(let i = 0; i<this.state.items.length; i++){
                      aff.innerHTML +="<p id='fifi'></p><br/>Nom :"+ this.state.items[i].nom +"<br/>Prenom :" + this.state.items[i].prenom +"<button onClick='{() => {props.editProduct(product)}}'>Edit</button></p></p><br/>" 
                    
                    }*/
                  }} className="btn btn-primary">Lister</button>

                <div id="affiche" style={{display:'none'}}>
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
                        <td>{item.nom}</td>
                        <td>{item.prenom}</td>
                        <td><button onClick = {()=>{
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <div className='custom-ui'>
                                  <form method="POST" action="http://localhost:8080/list?_method=PUT" enctype="application/x-www-form-urlencoded">
                                    <input type="hidden" name="_method" value="PUT"/>
                                    <input type="text" name="nom" placeholder={item.nom}/><br/><br/>
                                    <input type="text" name="prenom" placeholder={item.prenom}/><br/><br/>
                                    <input type="hidden" name="id" value={item.id}/>
                                  <button onClick={onClose} class="btn btn-outline-info">Cancel</button>
                                  <button class="btn btn-outline-success">
                                    Edit
                                  </button>
                                  </form>
                                </div>
                              );
                            }
                          });
                        }} className="btn btn-success">Update</button>
                        <button onClick = {()=>{
                          confirmAlert({
                          customUI: ({ onClose }) => {
                            return (
                              <div className='custom-ui'>
                                <form method="POST" action="http://localhost:8080/list?_method=DELETE" enctype="application/x-www-form-urlencoded">
                                  <input type="hidden" name="_method" value="DELETE"/>
                                  
                                  <input type="hidden" name="id" value={item.id}/>
                                  <span>confirmer supression<br/>{item.nom + ' '+item.prenom}</span>
                                  <br/><br/>
                                <button onClick={onClose} className="btn btn-outline-info">Cancel</button>
                                <button className="btn btn-outline-danger">
                                  Delete
                                </button>
                                </form>
                              </div>
                            );
                          }
                        });
                        }} className="btn btn-danger">Delete</button></td>
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