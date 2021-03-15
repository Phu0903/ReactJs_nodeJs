import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
          <div className="col-4">
  <div className="card text-left">
    <img className="card-img-top" src={this.props.image} alt=""/>
    <div className="card-body">
      <h4 className="card-title mark">{this.props.product_name}</h4>
      <h4 className="card-title">{this.props.product_price}</h4>
    </div>
  </div>
</div>

        );
    }
}

export default Products;