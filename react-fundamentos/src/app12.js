// Manejo de formularios en React - Propagacion de datos con inputs controlados
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

    // Propagando datos al padre
    this.props.onChange(this.props.name, text)
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
        placeholder={this.props.placeholder}
      />
    );
  }
}

class App extends Component{

  state = {
    name: '',
    email: '',
  }

  actualizar = (name, text) => {
    this.setState({
      [name]: text,
    })
  }
  
  render(){

    return(
      
      <div>
        <h1>
          Propagación de Datos con Inputs Controlados <Unicorn />
        </h1>
        <InputControlado 
          onChange = {this.actualizar}
          name = 'name'
          placeholder='Nombre completo...' 
        />
        <InputControlado 
          onChange = {this.actualizar}
          name = 'email'
          placeholder='Tu E-mail...' 
        />
      </div>
    );
  }
}

export default App;