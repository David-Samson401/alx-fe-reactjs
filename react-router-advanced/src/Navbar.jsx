
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/blog">Blog</Link> |{" "}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
