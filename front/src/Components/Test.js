import React, { Component } from 'react';
import './Test.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/test")
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
        <div class="row">
            <div className="col-md-6">
              <div className="forme">
                <form action = "http://localhost:8080/test" method = "POST">
                  <div>
                    <tr>
                      <td>Nom:</td>
                      <td><input type = "text" name = "nom"/></td>
                    </tr>
                  </div>
                  <div>
                      <tr>
                        <td>Prenom:</td>
                        <td><input type = "text" name = "prenom"/></td>
                      </tr>
                  </div>
                  <div>
                    <tr>
                      <td><input type = "submit" value = "Ajouter"/></td>
                    </tr>
                  </div>  
                </form>
              </div>
            </div>
            <div className="col-md-6">
                  
            </div>
        </div>
      </div>
    );
  }
  }
}

export default Test;