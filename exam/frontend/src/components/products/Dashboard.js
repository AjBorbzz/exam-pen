import React, { Fragment } from "react";
import Form from "./Form";
import Form1 from "./Form1";
import Products from "./Products";
import Vendors from "./Vendors";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <br />
      <br />
      <Products />
      <hr />
      <br />
      <br />
      <Form1 />
      <Vendors />
      <br />
    </Fragment>
  );
}
