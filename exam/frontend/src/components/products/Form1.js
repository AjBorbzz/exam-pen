import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVendor } from "../../actions/vendors";

export class Form1 extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone_number: ""
  };

  static propTypes = {
    addVendor: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, address, email, phone_number } = this.state;
    const vendor = {
      name,
      address,
      email,
      phone_number
    };
    this.props.addVendor(vendor);
  };

  render() {
    const { name, address, email, phone_number } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Vendor</h2>
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
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="text"
              name="phone_number"
              onChange={this.onChange}
              value={phone_number}
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

export default connect(null, { addVendor })(Form1);
