import React, { Fragment } from "react";
import Form from "./Form";
import Products from "./Products";
import Vendors from "./Vendors";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Products />
      <hr />
      <br />
      <Vendors />
    </Fragment>
  );
}
