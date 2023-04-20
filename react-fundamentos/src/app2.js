import React, {Component} from 'react';
//import TarjetaFruta from './Componentes/TarjetaFruta';

const styles = {
  height: '200px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box'
}

/*
const App = () => (
  <div>
    <TarjetaFruta name='Sandía' price={5.00} />
    <TarjetaFruta name='Naranja' price={1.50} />
    <TarjetaFruta name='Kiwi' price={3.50} />
  </div>
)
*/

class App extends Component{

  state = {
    x: 0,
    y: 0,
  }

  manejador = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render(){
    return(
      <div 
        style={styles}
        onMouseMove={this.manejador}
      >
        {/*<button
          onClick={this.manejador}
        >
          Dispara
        </button>*/}
        <div>
          x: {this.state.x}
        </div>
        <div>
          y: {this.state.y}
        </div>
      </div>
    );
  }
}

export default App;