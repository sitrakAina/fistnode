import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div>
              <button type="button" onClick={()=>{
                 let aff = document.getElementById('affiche')
                console.log(this.state.items)
                for(let i = 0; i<this.state.items.length; i++){   
                  aff.innerHTML +='<img src="{this.state.items[i].image}"/>' +this.state.items[i].nom +' ' + this.state.items[i].prenom +'<br>'
                 } 
              }} className="btn btn-primary">Lister</button>
             <p id="affiche"></p> 
          </div>
        );
      }
    }
  }
  export default List