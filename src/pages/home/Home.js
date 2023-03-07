import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList";

import React from "react";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {/* data is null until we fetch it so need to add data in the beginning to be true */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
