import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox/SearchBox";
import MoviesList from "../components/MoviesList/MoviesList";
import { searchMovie } from "../services/api";
import toast from "react-hot-toast";
import { Pagination } from "@mui/material";
import Loader from "../components/Loader/Loader";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === "") return;
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const movies = await searchMovie(query, signal, page);
        if (!movies.total_results) {
          return toast.error("Enter correct query");
        }

        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error: any) {
        if (error.name === "CanceledError") return;
        toast.error("Oops, something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [page, query]);

  const updateQueryString = (query: string) => {
    const nextParams: { query?: string } = query !== "" ? { query } : {};

    setSearchParams(nextParams);
  };

  const handlePageChange = (e: any, page: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setPage(page);
  };

  return (
    <main>
      <SearchBox updateQueryString={updateQueryString} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={totalPages}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        />
      )}
    </main>
  );
};

export default Movies;
