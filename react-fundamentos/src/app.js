// Entendiendo las Refs
import React, {Component} from 'react';

class Entrada extends Component{

  constructor() {
    super()

    this.entrada = React.createRef()
  }

  focus = () => {
    this.entrada.current.focus();
  };

  blur = () => {
    this.entrada.current.blur();
  };

  render(){
    return(
      <div>
        <input type='text' ref={this.entrada}></input>
        <button onClick={this.focus}>
          Focus
        </button> 
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    );
  }
}


class App extends Component{

  
  render(){

 

    return(
      
      <div>
        <h1>React refs 🦄</h1>
        <Entrada />
      </div>
    );
  }
}

export default App;