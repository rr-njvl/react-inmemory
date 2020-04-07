import React from 'react';
import ProductsListing from './ProductsListing';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.products = [{
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
      ];
  }

  render() {
    return (
      <div className="Products">
        <div>
          <h2>{this.name}</h2>
          <p>Display all the products in table format</p>
        </div>
        <ProductsListing products={this.products} />
      </div>
    );
  }
}

export default Products;