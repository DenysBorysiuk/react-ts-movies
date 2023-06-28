import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import MoviesList from "../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../services/api";
import Title from "../components/Title/Title";

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [timePeriod, setTimePeriod] = useState("day");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies(signal, timePeriod, page);
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
  }, [page, timePeriod]);

  return (
    <main>
      <Title timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
