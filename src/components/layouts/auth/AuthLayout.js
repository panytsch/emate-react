import React from "react";
import PropTypes from "prop-types";

export const AuthLayout = (props) => (
  <div className="vh-100 bg-gradient-primary">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.any,
}
