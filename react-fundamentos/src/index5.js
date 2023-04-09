import React from 'react';
import ReactDOM from 'react-dom';

class TarjetaFruta extends React.Component{

  state = {
    cantidad: 0
  }

  agregar = () => {
    this.setState({
      cantidad : this.state.cantidad + 1
    })
  }

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar = () => {
    this.setState({
      cantidad: 0
    })
  }

  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <hr />
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick = {this.agregar}> + </button>
        <button onClick = {this.quitar}> - </button>
        <button onClick = {this.limpiar}>limpiar</button>
        <p>$ {this.props.price}</p>
      </div>
    )
  }
}


const App = () => (
  <div>
    <TarjetaFruta name = 'Sandía' price = {5.00}/>
    <TarjetaFruta name = 'Naranja' price = {1.50} />
    <TarjetaFruta name = 'Kiwi' price = {3.50} />
  </div>
)
const root = document.getElementById('root');

ReactDOM.render(<App />, root);