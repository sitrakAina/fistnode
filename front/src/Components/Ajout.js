import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <form action = "http://localhost:8080/list" method = "POST">
          <div className="form-group">
                <input type="text" name="nom"  placeholder="Nom" className="form-control"/><br/><br/>	
                <input type="text" name="prenom"  placeholder="Prenom" className="form-control"/><br/><br/>				
                <input type="submit" value="Ajouter" className="btn btn-primary"/>		
            </div> 
        </form>
      </div>
    );
  }
}

export default App;