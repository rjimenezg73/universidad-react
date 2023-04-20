// Iterando propiedades de objetos con React
import React, {Component} from 'react';

class App extends Component{

  state = {
    user: {
      name: 'Gerardo Gallegos',
      country: 'Mexico',
      twitter: '@luxfennix',
      youtube: 'tecs.ninja',
    }
  }
  
  render(){

    const {user} = this.state;
    const keys = Object.keys(user);

    return(
      
      <div>
        <h3>Iterando Propiedades de Objetos 🌟</h3>
        <ul>
          {keys.map(key => (
            <li>
              {key}: {user[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;