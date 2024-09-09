import React from "react";
import { Link } from "react-router-dom";

const NotAllowed = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Access Denied</h2>
      <p>You are not allowed to access this page.</p>
      <Link to="/login" className="btn btn-primary">
        Go to Login
      </Link>
    </div>
  );
};

export default NotAllowed;
