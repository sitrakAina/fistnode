import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css'
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
                  aff.innerHTML +="<p id='fifi'>"+"<p id='fafa'>"+'<img id="reduire" src="'+this.state.items[i].image+'"/>'+"</p>"+ "<br/>" +"Nom :"+ this.state.items[i].nom +' '+"<br/>"+"Prenom :" + this.state.items[i].prenom +"</p>"+"<br/>" 
                 } 
              }} className="btn btn-primary">Lister</button>
             <p id="affiche"></p> 
          </div>
        );
      }
    }
  }
  export default List