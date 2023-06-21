import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import  SearchBox  from "../components/SearchBox/SearchBox";
import  MoviesList  from "../components/MoviesList/MoviesList";
import { searchMovie } from "../services/api";
import toast from "react-hot-toast";


const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movies = await searchMovie(query, signal);
        if (!movies.total_results) {
          return toast.error("Enter correct query");
        }

        setMovies(movies.results);
      } catch (error: any) {
        if (error.name === "CanceledError") return;
        toast.error("Oops, something went wrong");
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const updateQueryString = (query: string) => {
    const nextParams: { query?: string } = query !== "" ? { query } : {};

    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox updateQueryString={updateQueryString} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
