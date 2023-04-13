import React from "react";

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
    const styles = {
      border: "1px solid black",
      marginBottom: "1em",
      borderRadius: "0.5em",
      padding: "1em",
      background:
        this.state.cantidad > 0
          ? "green"
          : this.state.cantidad < 0
          ? "red"
          : "#FFF",
      color:
        this.state.cantidad > 0 || this.state.cantidad < 0 ? "#FFF" : "#000",
    };

    return (
      <div style={styles}>
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
