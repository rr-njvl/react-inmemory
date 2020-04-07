import React from 'react';

class ProductsListing extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    return (
      <div className="ProductsListing">
      </div>
    );
  }
}

export default ProductsListing;
