import React from 'react';

class ProductsListing extends React.Component {
  constructor(props) {
    this.id = props.product.id;
    this.name = props.product.name;
    this.quantity = props.product.quantity;
    this.cost = props.product.cost;
  }

  render() {
    return (
      <tr>
        <td>{this.id}</td>
        <td>{this.name}</td>
        <td>{this.quantity}</td>        
        <td>{this.cost}</td>
      </tr>
    );
  }
}

export default ProductsListing;
