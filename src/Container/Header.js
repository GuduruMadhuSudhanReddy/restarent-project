import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ count }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Restaurant
        </a>
        <button className="btn btn-primary">
          <Link to="/orders" style={{ color: "white", textDecoration: "none" }}>
            Orders
          </Link>
          <span className="badge bg-secondary ms-2">{count}</span>
        </button>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.orderreducer.length || 0  // ✅ Since orderreducer is an array
});

export default connect(mapStateToProps)(Header);
