import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import BackLink from "../components/BackLink/BackLink";
import toast from "react-hot-toast";
import Loader from "../components/Loader/Loader";

const MovieDetails: React.FC = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId, signal);
        setMovie(movieDetails);
      } catch (error: any) {
        if (error.name === "CanceledError") return;
        toast.error("Oops, something went wrong");
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <main>
      <BackLink to={ref.current}>Back</BackLink>
      {movie && <MovieInfo movie={movie} />}
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
