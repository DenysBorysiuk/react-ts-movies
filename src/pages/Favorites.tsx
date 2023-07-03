import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, [favorites]);

  return (
    <div>
      <h1>Favorites</h1>
      <MoviesList movies={favorites} />
    </div>
  );
};

export default Favorites;
