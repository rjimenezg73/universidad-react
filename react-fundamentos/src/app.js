// Iterando propiedades de objetos con React
import React, {Component} from 'react';

const users = [
  {id: 1, name: 'Gerardo Gallegos', country: 'Mexico', twitter: '@luxfennix', youtube: 'tecs.ninja'},
  {id: 2, name: 'Pedrito Aparicio', country: 'Mexico', twitter: '@perico69', youtube: 'pedro.bean'}
]
class App extends Component{

  
  render(){

 

    return(
      
      <div>
        <h3>Iterando🌟</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;