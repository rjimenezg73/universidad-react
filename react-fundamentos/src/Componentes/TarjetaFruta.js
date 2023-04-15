import React from "react";
//import './TarjetaFruta.css';
import styles from './TarjetaFruta.module.css';

console.log(styles);
class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0,
  };

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  };

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  };

  limpiar = () => {
    this.setState({
      cantidad: 0,
    });
  };

  render() {
    const hasItems = this.state.cantidad > 0;
    const activeClass = hasItems ? styles['TarjetaFruta-activa'] : styles['TarjetaFruta'];
    const clases = styles.TarjetaFruta + ' ' + activeClass;
    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <hr />
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}>limpiar</button>
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
