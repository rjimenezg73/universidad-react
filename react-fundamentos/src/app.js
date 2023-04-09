import React from 'react';
import TarjetaFruta from './Componentes/TarjetaFruta';

const App = () => (
  <div>
    <TarjetaFruta name='Sandía' price={5.00} />
    <TarjetaFruta name='Naranja' price={1.50} />
    <TarjetaFruta name='Kiwi' price={3.50} />
  </div>
)

export default App;