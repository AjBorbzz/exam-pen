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
    quantity: "",
    num_stocks: ""
  };

  static propTypes = {
    addProduct: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      name,
      vendor,
      product_sku,
      description,
      quantity,
      num_stocks
    } = this.state;
    const product = {
      name,
      vendor,
      product_sku,
      description,
      quantity,
      num_stocks
    };
    this.props.addProduct(product);
  };

  render() {
    const {
      name,
      vendor,
      product_sku,
      description,
      quantity,
      num_stocks
    } = this.state;
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
              placeholder="Enter Name of Product"
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
              placeholder="Enter Vendor ID"
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
              placeholder="Enter Product SKU"
              onChange={this.onChange}
              value={product_sku}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Product Description"
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
              placeholder="Enter Quantity"
              onChange={this.onChange}
              value={quantity}
            />
          </div>
          <div className="form-group">
            <label>No. Of Stocks</label>
            <input
              className="form-control"
              type="text"
              name="num_stocks"
              placeholder="Enter Number of Stocks Available"
              onChange={this.onChange}
              value={num_stocks}
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
