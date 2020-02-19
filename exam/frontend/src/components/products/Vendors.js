import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVendors } from "../../actions/vendors";

export class Vendors extends Component {
  static propTypes = {
    vendors: PropTypes.array.isRequired,
    getVendors: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getVendors();
  }

  render() {
    return (
      <Fragment>
        <h2>Vendor List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>address</th>
              <th>email</th>
              <th>phone_number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.vendors.map(vendor => (
              <tr key={vendor.id}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.address}</td>
                <td>{vendor.email}</td>
                <td>{vendor.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

// Map the state to props component (this.props.vendor)
const mapStateToProps = state => ({
  // points to vendor reducer.
  vendors: state.vendors.vendors
});

export default connect(mapStateToProps, { getVendors })(Vendors);
