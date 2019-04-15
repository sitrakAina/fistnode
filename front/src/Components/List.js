import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      const { error, isLoaded} = this.state;
      if (error) {
        return <div>{console.log(error.message)}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="container">
            <div className="row">
                <div class="col-md-6 content">
                    <form action = "http://localhost:8080/list" method = "POST">		
                      <input type="text" name="nom"  placeholder="Nom" /><br/><br/>	
                      <input type="text" name="prenom"  placeholder="Prenom" /><br/><br/>				
                      <input type="submit" value="Ajouter" class="btn btn-primary"/>		
                    </form>
                </div> 
              <div className="col-md-6">
                  <button type="button" onClick={()=>{
                    let aff = document.getElementById('affiche')
                    console.log(this.state.items)
                    for(let i = 0; i<this.state.items.length; i++){
                      aff.innerHTML +="<p id='fifi'></p><br/>Nom :"+ this.state.items[i].nom +"<br/>Prenom :" + this.state.items[i].prenom +"<button onClick='{() => {props.editProduct(product)}}'>Edit</button></p></p><br/>" 
                    
                    } 
                  }} className="btn btn-primary">Lister</button>
                <p id="affiche"></p>
              </div>
            </div> 
          </div>
        );
      }
    }
  }
  export default List 