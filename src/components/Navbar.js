import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import "./Navbar.css";

import React from "react";

import Searchbar from "./Searchbar";

export default function Navbar() {
  // const { color } = useContext(ThemeContext);
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
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
