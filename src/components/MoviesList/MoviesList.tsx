import { Link, useLocation } from 'react-router-dom';
import { List, Item, Thumb } from './MovieList.styled';

type Movie = {
  id: number;
  poster_path: string;
  title: string;
};

type Props = {
  movies: Movie[];
};

const MoviesList = ({ movies }: Props) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <Link to={`/movie/${id}`} state={{ from: location }}>
            <Thumb>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://via.placeholder.com/300x450.png?text=${title}`
                }
                alt={title}
              />
            </Thumb>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;
