import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, deleteProduct } from "../../actions/products";

export class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <Fragment>
        <h2>Products List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deleteProduct.bind(this, product.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

// Map the state to props component (this.props.products)
const mapStateToProps = state => ({
  // points to products reducer.
  products: state.products.products
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  Products
);
