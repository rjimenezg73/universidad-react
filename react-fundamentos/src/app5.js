// Iterando  de objetos con React
import React, {Component} from 'react';

class App extends Component{

  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: ['#467367', '#05fd88', '#a706eee'],
        price: 20,
      },
      {
        id: 2,
        name: 'jeans',
        colors: ['#d35eff', '#9956e8', '#876bff', '#5662e8'],
        price: 32,
      },
      {
        id: 3,
        name: 'taza',
        colors: ['#804342', '#ffd2d1', '#ff8785', '#806969'],
        price: 15,
      },
      {
        id: 4,
        name: 'camisa icream',
        colors: ['#2544b3', '#ff8a69', '#5076ff','#7fcc2b'],
        price: 30,
      },
      {
        id: 5,
        name: 'camisa dragon',
        colors: ['#b32542', '#ff6987', '#ff4ff73','#14b32b'],
        price: 35,
      },
    ]
  }

  render(){
    return(
      
      <div>
        <h3>Iterando Lista de Objetos 🌟</h3>
        <div>
          {this.state.products.map((product) => {
            return(
              <div>
                $ {product.price} - {product.name}
                <div>
                  {product.colors.map((color) => {
                    return(
                      <span
                        style = {{
                          width: '13px',
                          height: '13px',
                          borderRadius: '0.1em',
                          border: '1px solid gray',
                          display: 'inline-block',
                          margin: '0.1em',
                          background: color,
                        }}
                      ></span>
                    );
                  })}
                </div>
              </div>  
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;