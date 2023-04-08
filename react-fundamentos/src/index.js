import React from 'react';
import ReactDOM from 'react-dom';

const TarjetaFruta = () => (
  <div>
    <h3>Título</h3>
    <hr/>
    <p>Descripción...</p>
  </div>
)

const App = () => (
  <div>
    <TarjetaFruta />
  </div>
)
const root = document.getElementById('root');

ReactDOM.render(<App />, root);