import React, {Component} from 'react';
//import TarjetaFruta from './Componentes/TarjetaFruta';



class App extends Component{

  state = {
    texto: ''
  }

  manejador = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return(
      
      <div>
         <input
          type='text'
          onChange={this.manejador}
         >
         </input>
         <h1>
          {this.state.text}
         </h1>
      </div>
    );
  }
}

export default App;