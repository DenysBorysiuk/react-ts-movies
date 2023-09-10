import { useState } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';

const Favorites = () => {
  const [favorites] = useState(() => JSON.parse(localStorage.getItem('favorites') as string) ?? []);

  return (
    <div>
      <h1>Favorites</h1>
      <MoviesList movies={favorites} />
    </div>
  );
};

export default Favorites;
