import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Thumb,
  InfoWrapper,
  Link,
  Score,
  Button,
} from "./MovieInfo.styled";

interface IProps {
  movie: {
    poster_path: string;
    original_title: string;
    vote_average: number;
    overview: string;
    genres: { id: number; name: string }[];
    release_date: string;
    id: number;
  };
}

const MovieInfo: React.FC<IProps> = ({
  movie: {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
    id,
  },
}) => {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites") as string) ?? []
  );
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const isFavorite = favorites.find((movie: any) => movie.id === id);
    if (isFavorite) {
      setIsFavorite(true);
    }
  }, [favorites, id]);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
    setFavorites((prev: any) => [
      ...prev,
      {
        poster_path,
        original_title,
        vote_average,
        overview,
        genres,
        release_date,
        id,
      },
    ]);

    if (isFavorite) {
      setIsFavorite(false);
      setFavorites((prev: any) => prev.filter((movie: any) => movie.id !== id));
    }
  };

  return (
    <Wrapper>
      <Thumb>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://via.placeholder.com/400x550.png?text=${original_title}`
          }
          alt={original_title}
        />
      </Thumb>
      <InfoWrapper>
        <h2>
          {original_title} ({release_date.slice(0, 4)})
        </h2>
        <p>
          User Score: <Score>{(vote_average * 10).toFixed()}%</Score>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map((gener) => `${gener.name}, `)}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Button onClick={handleAddToFavorites} isFavorite={isFavorite}>
          {isFavorite ? "in favorites" : "add to favorites"}
        </Button>
      </InfoWrapper>
    </Wrapper>
  );
};

export default MovieInfo;
