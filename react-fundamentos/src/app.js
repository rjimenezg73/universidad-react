// Manejo de formularios en React - Inputs controlados con React
import React, {Component} from 'react';

// Esta es la forma correcta de ingresar un emoji
const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
);

class InputControlado extends Component{
  state = {
    text: '',
    tieneError: false,
    color: '#E8E8E8',
  }

  actualizar = (event) => {
    const text = event.target.value;
    const tieneError = text !== '' && text.length < 5;
    let color = 'green';

    if(text.trim() === ''){
      color = '#E8E8E8'
    }
    if(text.trim() !== '' && text.length < 5){
      color = 'red'
    }
  
    this.setState({text, color});
    console.log(text);
  }

  render(){
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6 em',
      outline: 'none',
    }

    return(
      <input 
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    );
  }
}

class App extends Component{
  
  render(){

    return(
      
      <div>
        <h1>
          Inputs Controlados <Unicorn />
        </h1>
        <InputControlado />
      </div>
    );
  }
}

export default App;