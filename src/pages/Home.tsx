import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import MoviesList from '../components/MoviesList/MoviesList';
import { getTrendingMovies } from '../services/api';
import Title from '../components/Title/Title';
import { Pagination } from '@mui/material';
import Loader from '../components/Loader/Loader';

type Movie = {
  id: number;
  poster_path: string;
  title: string;
};

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [timePeriod, setTimePeriod] = useState('day');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies(timePeriod, page, signal);
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error: any) {
        if (error.name === 'CanceledError') return;
        toast.error('Oops, something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [page, timePeriod]);

  const handlePageChange = (e: any, page: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setPage(page);
  };

  return (
    <main>
      <Title timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={totalPages}
          size="large"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        />
      )}
    </main>
  );
};

export default Home;
