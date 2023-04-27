// Manejo de formularios en React - Inputs no controlados Formularios
import React, {Component} from 'react';

// Esta es la forma correcta de ingresar un emoji
const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
);

class InputNoControlado extends Component{

  handleSubmit = (event) => {
    event.preventDefault(); // Esto permite que se mantengan en pantalla los datos y no envie inmediatamente
    const nombre = event.target[0].value;
    const email = event.target[1].value;

    // Manejo de datos
    this.props.onSend({nombre, email});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          placeholder='Nombre...'
        />
        <input 
          type='text'
          placeholder='E-mail...'
        />
        <button>
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component{

  send = (data) => {
    console.log(data);
  }

  
  render(){

    return(
      
      <div>
        <h1>
          Inputs NO controlados Formularios <Unicorn />
        </h1>
        <InputNoControlado 
          onSend={this.send}
        />
      </div>
    );
  }
}

export default App;