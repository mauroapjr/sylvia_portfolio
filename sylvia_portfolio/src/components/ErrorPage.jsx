import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div>
    <h1>Error: You are not logged in</h1>
    <p>Please <Link to="/Main">log in</Link> to access the Portfolio page.</p>
  </div>
);

export default ErrorPage;