import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Products">
        <div>
          <h2>{this.name}</h2>
        </div>
      </div>
    );
  }
}

export default Products;
