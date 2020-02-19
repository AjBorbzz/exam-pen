import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../actions/products";

export class Form extends Component {
  state = {
    name: "",
    vendor: "",
    product_sku: "",
    description: "",
    quantity: ""
  };

  static propTypes = {
    addProduct: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, vendor, product_sku, description, quantity } = this.state;
    const product = {
      name,
      vendor,
      product_sku,
      description,
      quantity
    };
    this.props.addProduct(product);
  };

  render() {
    const { name, vendor, product_sku, description, quantity } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Vendor</label>
            <input
              className="form-control"
              type="text"
              name="vendor"
              onChange={this.onChange}
              value={vendor}
            />
          </div>
          <div className="form-group">
            <label>Product SKU</label>
            <input
              className="form-control"
              type="text"
              name="product_sku"
              onChange={this.onChange}
              value={product_sku}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              className="form-control"
              type="text"
              name="quantity"
              onChange={this.onChange}
              value={quantity}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addProduct })(Form);
