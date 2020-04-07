import React from 'react';

class ProductsListing extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    return (
      <table id="mobiles">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Cost</th>
        </tr>
        {this.products.map(prod => (
          <tr className="listing">
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>{prod.cost}</td>
          </tr>  
        ))}
      </table>
    );
  }
}

export default ProductsListing;
