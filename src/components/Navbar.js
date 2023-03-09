import { Link } from "react-router-dom";

import "./Navbar.css";

import React from "react";

import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipies</Link>
      </nav>
    </div>
  );
}
