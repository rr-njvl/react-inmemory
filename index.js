import React, { Component } from 'react';
import { render } from 'react-dom';
import Products from './Products';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Products Listing',
      products: [{
          'id': '1',
          'name': 'Apple iPhone 11 Pro',
          'cost': '97900'
        }, {
          'id': '2',
          'name': 'Apple iPhone 6s 128GB',
          'cost': '23999'
        }, {
          'id': '3',
          'name': 'Apple iPhone XS',
          'cost': '58999'
        },{
          'id': '4',
          'name': 'Apple iPhone 6s 32GB',
          'cost': '23999'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Products name={this.state.name} products={this.state.products} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
