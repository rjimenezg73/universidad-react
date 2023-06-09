import React from 'react';
import ReactDOM from 'react-dom';

const TarjetaFruta = (props) => {
  console.log(props);
  
  return(
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>$ {props.price}</p>
    </div>
  )
}

const App = () => (
  <div>
    <TarjetaFruta name = 'Sandía' price = {2.00}/>
    <TarjetaFruta name = 'Naranja' price = {1.50} />
    <TarjetaFruta name = 'Kiwi' price = {3.50} />
  </div>
)
const root = document.getElementById('root');

ReactDOM.render(<App />, root);