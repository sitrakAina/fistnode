import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ajout.css';


class App extends Component {
  render() {
    return (
      <div className="cadre">
        <form action = "http://localhost:8080/list" method = "POST" className="form-inline">
            <div className="form-group">
              <label htmlFor="email">Nom</label>
              <input type="text" name="nom"   className="form-control" required  data-error-msg="Ajouter une valeur"/>
            </div> 
            <div className="form-group" id="prenom">
              <label htmlFor="email">Prenom</label>
              <input type="text" name="prenom"   className="form-control" required  data-error-msg="Ajouter une valeur"/>
            </div>
            <input type="submit" value="Ajouter" className="btn btn-primary" id="ajout"/>	
        </form>
      </div>
    );
  }
}

export default App;