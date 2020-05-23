import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h3>namTech todo list</h3>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
